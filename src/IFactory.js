/**
 * @typedef {object} IRepositoryFactory
 * @property {<T>(repository: IRepository<T>) => IRepository<T>} create
 * @property {<T>(repository: IRepository<T>, key: Key) => IKeyedRepository<T>} createKeyed
 * @property {<T, P>(repository: IRepository<P>, modelFactory: ModelFactory<T, P>) => IModelledRepository<T>} createModeled
 * @property {<T>(object: Record<PropertyKey, T | undefined>) => IRepository<T>} createObjected
 */

/**
 * @typedef {IRepositoryFactoryProperties} IRepositoryFactoryParams
 * 
 * @typedef {object} IRepositoryFactoryProperties
 * @property {RepositoryConstructable} Repository
 * @property {KeyedRepositoryConstructable} Keyed
 * @property {ModeledRepositoryConstructable} Modeled
 * @property {ObjectedRepositoryConstructable} Objected
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IRepository.js').IRepository<T>} IRepository
 */

/**
 * @typedef {import('./IRepository.js').RepositoryConstructable} RepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IKeyedRepository.js').IKeyedRepository<T>} IKeyedRepository
 */

/**
 * @typedef {import('./IKeyedRepository.js').KeyedRepositoryConstructable} KeyedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IModeledRepository.js').IModeledRepository<T>} IModelledRepository
 */

/**
 * @typedef {import('./IModeledRepository.js').ModeledRepositoryConstructable} ModeledRepositoryConstructable
 */

/**
 * @typedef {import('./IObjectedRepository.js').ObjectedRepositoryConstructable} ObjectedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @typedef {import('./IModeledRepository.js').ModelFactory<T, P>} ModelFactory
 */

/**
 * @typedef {import('./IRepository.js').Key} Key
 */
