/**
 * @typedef {new <T, P>(params: ModeledRepositoryParams<T, P>) => IModeledRepository<T>} ModeledRepositoryConstructable
 */

/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @implements {IModeledRepository<T>}
 */
export default class ModeledRepository {
  /**
   * @template {unknown} T
   * 
   * @typedef {import('./interfaces/IModeledRepository.js').IModeledRepository<T>} IModeledRepository
   */

  /**
   * @template {unknown} T
   * @template {unknown} P
   * 
   * @typedef {ModeledRepositoryProperties<T, P>} ModeledRepositoryParams
   */

  /**
   * @template {unknown} T
   * @template {unknown} P
   * 
   * @typedef {object} ModeledRepositoryProperties
   * @property {IRepository<P>} repository
   * @property {ModelFactory<T, P>} modelFactory
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {import('./interfaces/IRepository.js').IRepository<T>} IRepository
   */

  /**
   * @template {unknown} T
   * @template {unknown} P
   * 
   * @typedef {import('./interfaces/IModeledRepository.js').ModelFactory<T, P>} ModelFactory
   */

  /**
   * @typedef {object} Model
   * @property {() => P} getProperties
   */

  /** @type {ModeledRepositoryProperties<T, P>['repository']} */
  #repository;

  /** @type {ModeledRepositoryProperties<T, P>['modelFactory']} */
  #modelFactory;

  /** @param {ModeledRepositoryParams<T, P>} params */
  constructor({ repository, modelFactory }) {
    this.#repository = repository;
    this.#modelFactory = modelFactory;
  }

  /** @type {IModeledRepository<T>['get']} */
  async get(key) {
    const repository = this.#repository;

    const properties = await repository.get(key);
    if (properties == null) {
      return;
    }

    return this.#modelFactory(properties);
  }

  /** @type {IModeledRepository<T>['has']} */
  async has(key) {
    const repository = this.#repository;

    return repository.has(key);
  }

  /** @type {IModeledRepository<T>['set']} */
  async set(key, model) {
    const repository = this.#repository;

    const data = this.#getData(model);

    await repository.set(key, data);
  }

  /** @type {IModeledRepository<T>['remove']} */
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
