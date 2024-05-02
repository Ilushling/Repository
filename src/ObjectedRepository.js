/**
 * @template {unknown} T
 * 
 * @implements {IRepository}
 */
export default class ObjectedRepository {
  /**
   * @typedef {import('./IRepository.js').IRepository<T>} IRepository
   */

  /**
   * @typedef {import('./IObjectedRepository.js').ObjectedRepositoryParams<T>} ObjectedRepositoryParams
   * @typedef {import('./IObjectedRepository.js').ObjectedRepositoryProperties<T>} ObjectedRepositoryProperties
   */

  /** @type {ObjectedRepositoryProperties['object']} */
  #object;

  /** @param {ObjectedRepositoryParams} params */
  constructor({ object }) {
    this.#object = object;
  }

  /** @type {IRepository['get']} */
  async get(key) {
    const object = this.#object;

    return object[key];
  }

  /** @type {IRepository['has']} */
  async has(key) {
    const object = this.#object;

    return key in object;
  }

  /** @type {IRepository['set']} */
  async set(key, data) {
    const object = this.#object;

    object[key] = data;
  }

  /** @type {IRepository['remove']} */
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
