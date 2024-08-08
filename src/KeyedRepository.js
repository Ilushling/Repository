/**
 * @import { IKeyedRepository } from './interfaces/IKeyedRepository.js'
 * 
 * @import { IRepository, Key } from './interfaces/IRepository.js'
 */

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
   * @typedef {KeyedRepositoryDependencies<T>
   *  & KeyedRepositoryConfigs} KeyedRepositoryParams
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {KeyedRepositoryDependencies<T>
   *  & KeyedRepositoryConfigs} KeyedRepositoryProperties
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {object} KeyedRepositoryDependencies
   * @property {IRepository<T>} repository
   */

  /**
   * @typedef {object} KeyedRepositoryConfigs
   * @property {Key} key
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

  /** @type {IKeyedRepository<T>['clear']} */
  async clear() {
    const repository = this.#repository;

    await repository.clear();
  }
}
