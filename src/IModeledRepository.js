/**
 * @template {unknown} T
 * 
 * @typedef {object} IModeledRepository
 * @property {(key: Key) => Promise<T | undefined>} get
 * @property {(key: Key, model: T) => Promise<void>} set
 * @property {(key: Key) => Promise<boolean>} has
 * @property {(key: Key) => Promise<void>} remove
 * @property {() => Promise<void>} clear
 */

/**
 * @typedef {new <T, P>(params: ModeledRepositoryParams<T, P>) => IModeledRepository<T>} ModeledRepositoryConstructable
 */

/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @typedef {ModeledRepositoryProperties<T, P>} ModeledRepositoryParams
 */

/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @typedef {object} ModeledRepositoryProperties
 * @property {IRepository<P>} repository
 * @property {ModelFactory<T, P>} modelFactory
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IRepository.js').IRepository<T>} IRepository
 */

/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @typedef {object} ModelFactory
 * @property {(data: P) => T} create
 */

/**
 * @template {unknown} T
 * 
 * @typedef {object} Model
 * @property {() => T} getProperties
 */

/**
 * @typedef {import('./IRepository.js').Key} Key
 */
