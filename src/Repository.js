/**
 * @import { IRepository } from './interfaces/IRepository.js'
 */

/**
 * @typedef {new <T>(params: RepositoryParams<T>) => IRepository<T>} RepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @implements {IRepository<T>}
 */
export default class Repository {
  /**
   * @template {unknown} T
   * 
   * @typedef {RepositoryDependencies<T>} RepositoryParams
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {RepositoryDependencies<T>} RepositoryProperties
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {object} RepositoryDependencies
   * @property {IRepository<T>} repository
   */

  /** @type {RepositoryProperties<T>['repository']} */
  #repository;

  /** @param {RepositoryParams<T>} params */
  constructor({ repository }) {
    this.#repository = repository;
  }

  /** @type {IRepository<T>['get']} */
  async get(key) {
    const repository = this.#repository;

    return repository.get(key);
  }

  /** @type {IRepository<T>['has']} */
  async has(key) {
    const repository = this.#repository;

    return repository.has(key);
  }

  /** @type {IRepository<T>['set']} */
  async set(key, data) {
    const repository = this.#repository;

    await repository.set(key, data);
  }

  /** @type {IRepository<T>['remove']} */
  async remove(key) {
    const repository = this.#repository;

    await repository.remove(key);
  }

  /** @type {IRepository<T>['clear']} */
  async clear() {
    const repository = this.#repository;

    await repository.clear();
  }
}
