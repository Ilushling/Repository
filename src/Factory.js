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
    return new this.#Repository({ repository });
  }

  /** @type {IRepositoryFactory['createKeyed']} */
  createKeyed(repository, key) {
    return new this.#Keyed({ repository, key });
  }

  /** @type {IRepositoryFactory['createModeled']} */
  createModeled(repository, modelFactory) {
    return new this.#Modeled({ repository, modelFactory });
  }

  /** @type {IRepositoryFactory['createObjected']} */
  createObjected(object) {
    return new this.#Objected({ object });
  }
}
