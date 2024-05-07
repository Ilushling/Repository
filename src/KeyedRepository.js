/**
 * @typedef {new <T>(params: KeyedRepositoryParams<T>) => IKeyedRepository<T>} KeyedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @implements {IKeyedRepository<T>}
 */
export default class KeyedRepository {
  /**
   * @template {unknown} T
   * 
   * @typedef {import('./interfaces/IKeyedRepository.js').IKeyedRepository<T>} IKeyedRepository
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {KeyedRepositoryProperties<T>} KeyedRepositoryParams
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {object} KeyedRepositoryProperties
   * @property {IRepository<T>} repository
   * @property {Key} key
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {import('./interfaces/IRepository.js').IRepository<T>} IRepository
   */

  /**
   * @typedef {import('./interfaces/IRepository.js').Key} Key
   */

  // Dependencies
  /** @type {KeyedRepositoryProperties<T>['repository']} */
  #repository;

  // Configs
  /** @type {KeyedRepositoryProperties<T>['key']} */
  #key;

  /** @param {KeyedRepositoryParams<T>} params */
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

    await repository.set(key, data);
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
