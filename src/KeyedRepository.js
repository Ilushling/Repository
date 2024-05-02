/**
   * @template {unknown} T
 * 
 * @implements {IKeyedRepository<T>}
 */
export default class KeyedRepository {
  /**
   * @template {unknown} T
   * 
   * @typedef {import('./IKeyedRepository.js').IKeyedRepository<T>} IKeyedRepository
   */

  /**
   * @typedef {import('./IKeyedRepository.js').KeyedRepositoryParams<T>} KeyedRepositoryParams
   */

  /**
   * @typedef {import('./IKeyedRepository.js').KeyedRepositoryProperties<T>} KeyedRepositoryProperties
   */

  // Dependencies
  /** @type {KeyedRepositoryProperties['repository']} */
  #repository;

  // Configs
  /** @type {KeyedRepositoryProperties['key']} */
  #key;

  /** @param {KeyedRepositoryParams} params */
  constructor({
    repository,

    key
  }) {
    this.#repository = repository;

    this.#key = key;
  }

  /** @type {IKeyedRepository<T>['get']} */
  async get() {
    const repository = this.#repository;
    const key = this.#key;

    return repository.get(key);
  }

  /** @type {IKeyedRepository<T>['has']} */
  async has() {
    const repository = this.#repository;
    const key = this.#key;

    return repository.has(key);
  }

  /** @type {IKeyedRepository<T>['set']} */
  async set(data) {
    const repository = this.#repository;
    const key = this.#key;

    repository.set(key, data);
  }

  /** @type {IKeyedRepository<T>['remove']} */
  async remove() {
    const repository = this.#repository;
    const key = this.#key;

    await repository.remove(key);
  }

  async clear() {
    const repository = this.#repository;

    await repository.clear();
  }
}
