/**
 * @implements {IRepositoryFactory}
 */
export default class RepositoryFactory {
  /**
   * @typedef {import('./IFactory.js').IRepositoryFactory} IRepositoryFactory
   * @typedef {import('./IFactory.js').IRepositoryFactoryParams} IRepositoryFactoryParams
   * @typedef {import('./IFactory.js').IRepositoryFactoryProperties} IRepositoryFactoryProperties
   */

  /** @type {IRepositoryFactoryProperties['Repository']} */
  #Repository;

  /** @type {IRepositoryFactoryProperties['Keyed']} */
  #Keyed;

  /** @type {IRepositoryFactoryProperties['Modeled']} */
  #Modeled;

  /** @type {IRepositoryFactoryProperties['Objected']} */
  #Objected;

  /** @param {IRepositoryFactoryParams} params */
  constructor({
    Repository,
    Keyed,
    Modeled,
    Objected
  }) {
    this.#Repository = Repository;
    this.#Keyed = Keyed;
    this.#Modeled = Modeled;
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
