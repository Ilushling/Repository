/**
 * @import {
 *  IModeledRepository,
 *  ModelFactory,
 *  Model
 * } from './interfaces/IModeledRepository.js'
 * 
 * @import { IRepository } from './interfaces/IRepository.js'
 */

/**
 * @typedef {new <T extends Model<P>, P extends unknown>(
 *  params: ModeledRepositoryParams<T, P>
 * ) => IModeledRepository<T>
 * } ModeledRepositoryConstructable
 */

/**
 * @template {Model<P>} T
 * @template {unknown} P
 * 
 * @implements {IModeledRepository<T>}
 */
export default class ModeledRepository {
  /**
   * @template {Model<P>} T
   * @template {unknown} P
   * 
   * @typedef {ModeledRepositoryProperties<T, P>} ModeledRepositoryParams
   */

  /**
   * @template {Model<P>} T
   * @template {unknown} P
   * 
   * @typedef {ModeledRepositoryDependencies<T, P>} ModeledRepositoryProperties
   */

  /**
   * @template {Model<P>} T
   * @template {unknown} P
   * 
   * @typedef {object} ModeledRepositoryDependencies
   * @property {IRepository<P>} repository
   * @property {ModelFactory<T, P>} modelFactory
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

  //#region Interfaces
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

  /** @type {IModeledRepository<T>['clear']} */
  async clear() {
    const repository = this.#repository;

    await repository.clear();
  }
  //#endregion

  //#region Logic
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
   * @returns {data is T}
   */
  #isModel(data) {
    return data != null
      && typeof data === 'object'
      && 'getProperties' in data
      && typeof data.getProperties === 'function';
  }
  //#endregion
}
