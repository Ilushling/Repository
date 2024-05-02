/**
 * @template {unknown} T
 * 
 * @typedef {object} IRepository
 * @property {(key: Key) => Promise<T | undefined>} get
 * @property {(key: Key, data: T) => Promise<void>} set
 * @property {(key: Key) => Promise<boolean>} has
 * @property {(key: Key) => Promise<void>} remove
 * @property {() => Promise<void>} clear
 */

/**
 * @typedef {new <T>(params: RepositoryParams<T>) => IRepository<T>} RepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @typedef {RepositoryProperties<T>} RepositoryParams
 */

/**
 * @template {unknown} T
 * 
 * @typedef {object} RepositoryProperties
 * @property {IRepository<T>} repository
 */

/**
 * @typedef {string | number} Key
 */
