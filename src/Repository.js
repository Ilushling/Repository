/**
 * @template {unknown} T
 * 
 * @implements {IRepository}
 */
export default class Repository {
  /**
   * @typedef {import('./IRepository.js').IRepository<T>} IRepository
   */

  /**
   * @typedef {import('./IRepository.js').RepositoryParams<T>} RepositoryParams
   */

  /**
   * @typedef {import('./IRepository.js').RepositoryProperties<T>} RepositoryProperties
   */

  /** @type {RepositoryProperties['repository']} */
  #repository;

  /** @param {RepositoryParams} params */
  constructor({ repository }) {
    this.#repository = repository;
  }

  /** @type {IRepository['get']} */
  async get(key) {
    const repository = this.#repository;

    return repository.get(key);
  }

  /** @type {IRepository['has']} */
  async has(key) {
    const repository = this.#repository;

    return repository.has(key);
  }

  /** @type {IRepository['set']} */
  async set(key, data) {
    const repository = this.#repository;

    repository.set(key, data);
  }

  /** @type {IRepository['remove']} */
  async remove(key) {
    const repository = this.#repository;

    await repository.remove(key);
  }

  async clear() {
    const repository = this.#repository;

    await repository.clear();
  }
}
