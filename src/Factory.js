/**
 * @implements {IRepositoryFactory}
 */
export default class RepositoryFactory {
  /**
   * @typedef {import('./interfaces/IFactory.js').IRepositoryFactory} IRepositoryFactory
   */

  /**
   * @typedef {IRepositoryFactoryProperties} IRepositoryFactoryParams
   * 
   * @typedef {object} IRepositoryFactoryProperties
   * @property {RepositoryConstructable=} Repository
   * @property {ArrayedRepositoryConstructable=} Arrayed
   * @property {ModeledRepositoryConstructable=} Modeled
   * @property {KeyedRepositoryConstructable=} Keyed
   * @property {ObjectedRepositoryConstructable=} Objected
   */

  /**
   * @typedef {import('./Repository.js').RepositoryConstructable} RepositoryConstructable
   * @typedef {import('./ArrayedRepository.js').ArrayedRepositoryConstructable} ArrayedRepositoryConstructable
   * @typedef {import('./ModeledRepository.js').ModeledRepositoryConstructable} ModeledRepositoryConstructable
   * @typedef {import('./KeyedRepository.js').KeyedRepositoryConstructable} KeyedRepositoryConstructable
   * @typedef {import('./ObjectedRepository.js').ObjectedRepositoryConstructable} ObjectedRepositoryConstructable
   */

  /** @type {IRepositoryFactoryProperties['Repository']} */
  #Repository;

  /** @type {IRepositoryFactoryProperties['Arrayed']} */
  #Arrayed;

  /** @type {IRepositoryFactoryProperties['Modeled']} */
  #Modeled;

  /** @type {IRepositoryFactoryProperties['Keyed']} */
  #Keyed;

  /** @type {IRepositoryFactoryProperties['Objected']} */
  #Objected;

  /** @param {IRepositoryFactoryParams} params */
  constructor({
    Repository,
    Arrayed,
    Modeled,
    Keyed,
    Objected
  }) {
    this.#Repository = Repository;
    this.#Arrayed = Arrayed;
    this.#Modeled = Modeled;
    this.#Keyed = Keyed;
    this.#Objected = Objected;
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
    const Arrayed = this.#Arrayed;

    if (Arrayed == null) {
      throw Object.assign(new Error('Arrayed must be injected in constructor'), {
        name: 'InvalidArrayedError'
      });
    }

    return new Arrayed({ array });
  }

  /** @type {IRepositoryFactory['createModeled']} */
  createModeled(repository, modelFactory) {
    const Modeled = this.#Modeled;

    if (Modeled == null) {
      throw Object.assign(new Error('Modeled must be injected in constructor'), {
        name: 'InvalidModeledError'
      });
    }

    return new Modeled({ repository, modelFactory });
  }

  /** @type {IRepositoryFactory['createKeyed']} */
  createKeyed(repository, key) {
    const Keyed = this.#Keyed;

    if (Keyed == null) {
      throw Object.assign(new Error('Keyed must be injected in constructor'), {
        name: 'InvalidKeyedError'
      });
    }

    return new Keyed({ repository, key });
  }

  /** @type {IRepositoryFactory['createObjected']} */
  createObjected(object) {
    const Objected = this.#Objected;

    if (Objected == null) {
      throw Object.assign(new Error('Objected must be injected in constructor'), {
        name: 'InvalidObjectedError'
      });
    }

    return new Objected({ object });
  }
}
