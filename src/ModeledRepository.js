/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @implements {IModeledRepository}
 */
export default class ModeledRepository {
  /**
   * @typedef {import('./IModeledRepository.js').IModeledRepository<T>} IModeledRepository
   */

  /**
   * @typedef {import('./IModeledRepository.js').ModeledRepositoryParams<T, P>} ModeledRepositoryParams
   */

  /**
   * @typedef {import('./IModeledRepository.js').ModeledRepositoryProperties<T, P>} ModeledRepositoryProperties
   */

  /**
   * @typedef {import('./IModeledRepository.js').Model<P>} Model
   */

  /** @type {ModeledRepositoryProperties['repository']} */
  #repository;

  /** @type {ModeledRepositoryProperties['modelFactory']} */
  #modelFactory;

  /** @param {ModeledRepositoryParams} params */
  constructor({ repository, modelFactory }) {
    this.#repository = repository;
    this.#modelFactory = modelFactory;
  }

  /** @type {IModeledRepository['get']} */
  async get(key) {
    const repository = this.#repository;

    const data = await repository.get(key);
    if (data == null) {
      return;
    }

    return this.#modelFactory.create(data);
  }

  /** @type {IModeledRepository['has']} */
  async has(key) {
    const repository = this.#repository;

    return repository.has(key);
  }

  /** @type {IModeledRepository['set']} */
  async set(key, model) {
    const repository = this.#repository;

    const data = this.#getData(model);

    repository.set(key, data);
  }

  /** @type {IModeledRepository['remove']} */
  async remove(key) {
    const repository = this.#repository;

    await repository.remove(key);
  }

  async clear() {
    const repository = this.#repository;

    await repository.clear();
  }

  /**
   * @param {unknown} data
   * @returns {P}
   */
  #getData(data) {
    if (!this.#isModel(data)) {
      throw Object.assign(new Error('Data must be object with getProperties method'), {
        name: 'InvalidDataError'
      });
    }

    return data.getProperties();
  }

  /**
   * @param {unknown} data
   * @returns {data is Model}
   */
  #isModel(data) {
    return data != null
      && typeof data === 'object'
      && 'getProperties' in data
      && typeof data.getProperties === 'function';
  }
}
