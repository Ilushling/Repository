/**
 * @typedef {new <T>(params: ObjectedRepositoryParams<T>) => IRepository<T>} ObjectedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @implements {IRepository<T>}
 */
export default class ObjectedRepository {
  /**
   * @template {unknown} T
   * 
   * @typedef {import('./interfaces/IRepository.js').IRepository<T>} IRepository
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {ObjectedRepositoryProperties<T>} ObjectedRepositoryParams
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {object} ObjectedRepositoryProperties
   * @property {Record<PropertyKey, T | undefined>} object
   */

  /** @type {ObjectedRepositoryProperties<T>['object']} */
  #object;

  /** @param {ObjectedRepositoryParams<T>} params */
  constructor({ object }) {
    this.#object = object;
  }

  /** @type {IRepository<T>['get']} */
  async get(key) {
    const object = this.#object;

    return object[key];
  }

  /** @type {IRepository<T>['set']} */
  async set(key, data) {
    const object = this.#object;

    object[key] = data;
  }

  /** @type {IRepository<T>['has']} */
  async has(key) {
    const object = this.#object;

    return key in object;
  }

  /** @type {IRepository<T>['remove']} */
  async remove(key) {
    const object = this.#object;

    delete object[key];
  }

  async clear() {
    const object = this.#object;

    for (const key in object) {
      delete object[key];
    }
  }
}
