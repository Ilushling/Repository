/**
 * @template {unknown} T
 * 
 * @typedef {object} IKeyedRepository
 * @property {() => Promise<T | undefined>} get
 * @property {(data: T) => Promise<void>} set
 * @property {() => Promise<boolean>} has
 * @property {() => Promise<void>} remove
 * @property {() => Promise<void>} clear
 */

/**
 * @typedef {new <T>(params: KeyedRepositoryParams<T>) => IKeyedRepository<T>} KeyedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @typedef {KeyedRepositoryProperties<T>} KeyedRepositoryParams
 */

/**
 * @template {unknown} T
 * 
 * @typedef {object} KeyedRepositoryProperties
 * @property {IRepository<T>} repository
 * @property {Key} key
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IRepository.js').IRepository<T>} IRepository
 */

/**
 * @typedef {import('./IRepository.js').Key} Key
 */
