/**
 * @import { IRepositoryFactory } from './interfaces/IFactory.js'
 * 
 * @import { RepositoryConstructable } from './Repository.js'
 * @import { ArrayedRepositoryConstructable } from './ArrayedRepository.js'
 * @import { ModeledRepositoryConstructable } from './ModeledRepository.js'
 * @import { KeyedRepositoryConstructable } from './KeyedRepository.js'
 * @import { ObjectedRepositoryConstructable } from './ObjectedRepository.js'
 */

/**
 * @implements {IRepositoryFactory}
 */
export default class RepositoryFactory {
  /**
   * @typedef {RepositoryFactoryDependencies} RepositoryFactoryParams
   * @typedef {RepositoryFactoryDependencies} RepositoryFactoryProperties
   * 
   * @typedef {object} RepositoryFactoryDependencies
   * @property {RepositoryConstructable=} Repository
   * @property {ArrayedRepositoryConstructable=} ArrayedRepository
   * @property {ModeledRepositoryConstructable=} ModeledRepository
   * @property {KeyedRepositoryConstructable=} KeyedRepository
   * @property {ObjectedRepositoryConstructable=} ObjectedRepository
   */

  /** @type {RepositoryFactoryProperties['Repository']} */
  #Repository;

  /** @type {RepositoryFactoryProperties['ArrayedRepository']} */
  #ArrayedRepository;

  /** @type {RepositoryFactoryProperties['ModeledRepository']} */
  #ModeledRepository;

  /** @type {RepositoryFactoryProperties['KeyedRepository']} */
  #KeyedRepository;

  /** @type {RepositoryFactoryProperties['ObjectedRepository']} */
  #ObjectedRepository;

  /** @param {RepositoryFactoryParams} params */
  constructor({
    Repository,
    ArrayedRepository,
    ModeledRepository,
    KeyedRepository,
    ObjectedRepository
  }) {
    this.#Repository = Repository;
    this.#ArrayedRepository = ArrayedRepository;
    this.#ModeledRepository = ModeledRepository;
    this.#KeyedRepository = KeyedRepository;
    this.#ObjectedRepository = ObjectedRepository;
  }

  /** @type {IRepositoryFactory['create']} */
  create(repository) {
    const Repository = this.#Repository;

    if (Repository == null) {
      throw Object.assign(new Error('Repository must be injected in constructor'), {
        name: 'InvalidRepositoryError'
      });
    }

    return new Repository({ repository });
  }

  /** @type {IRepositoryFactory['createArrayed']} */
  createArrayed(array) {
    const ArrayedRepository = this.#ArrayedRepository;

    if (ArrayedRepository == null) {
      throw Object.assign(new Error('Arrayed must be injected in constructor'), {
        name: 'InvalidArrayedError'
      });
    }

    return new ArrayedRepository({ array });
  }

  /** @type {IRepositoryFactory['createModeled']} */
  createModeled(repository, modelFactory) {
    const ModeledRepository = this.#ModeledRepository;

    if (ModeledRepository == null) {
      throw Object.assign(new Error('Modeled must be injected in constructor'), {
        name: 'InvalidModeledError'
      });
    }

    return new ModeledRepository({ repository, modelFactory });
  }

  /** @type {IRepositoryFactory['createKeyed']} */
  createKeyed(repository, key) {
    const KeyedRepository = this.#KeyedRepository;

    if (KeyedRepository == null) {
      throw Object.assign(new Error('Keyed must be injected in constructor'), {
        name: 'InvalidKeyedError'
      });
    }

    return new KeyedRepository({ repository, key });
  }

  /** @type {IRepositoryFactory['createObjected']} */
  createObjected(object) {
    const ObjectedRepository = this.#ObjectedRepository;

    if (ObjectedRepository == null) {
      throw Object.assign(new Error('Objected must be injected in constructor'), {
        name: 'InvalidObjectedError'
      });
    }

    return new ObjectedRepository({ object });
  }
}
