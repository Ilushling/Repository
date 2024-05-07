/**
 * @typedef {new <T>(params: ArrayedRepositoryParams<T>) => IArrayedRepository<T>} ArrayedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @implements {IArrayedRepository<T>}
 */
export default class ArrayedRepository {
  /**
   * @template {unknown} T
   * 
   * @typedef {import('./interfaces/IArrayedRepository.js').IArrayedRepository<T>} IArrayedRepository
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {ArrayedRepositoryProperties<T>} ArrayedRepositoryParams
   */

  /**
   * @template {unknown} T
   * 
   * @typedef {object} ArrayedRepositoryProperties
   * @property {T[]} array
   */

  /** @type {ArrayedRepositoryProperties<T>['array']} */
  #array;

  /** @param {ArrayedRepositoryParams<T>} params */
  constructor({ array }) {
    this.#array = array;
  }

  /** @type {IArrayedRepository<T>['get']} */
  async get(index) {
    const array = this.#array;

    return array[index];
  }

  /** @type {IArrayedRepository<T>['set']} */
  async set(index, data) {
    const array = this.#array;

    array[index] = data;
  }

  /** @type {IArrayedRepository<T>['add']} */
  async add(data) {
    const array = this.#array;

    array.push(data);
  }

  /** @type {IArrayedRepository<T>['has']} */
  async has(index) {
    const array = this.#array;

    return index in array;
  }

  /** @type {IArrayedRepository<T>['remove']} */
  async remove(index) {
    const array = this.#array;

    array.splice(index, 1);
  }

  async clear() {
    const array = this.#array;

    array.length = 0;
  }
}
