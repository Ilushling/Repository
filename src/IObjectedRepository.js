/**
 * @typedef {new <T>(params: ObjectedRepositoryParams<T>) => IRepository<T>} ObjectedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @typedef {ObjectedRepositoryProperties<T>} ObjectedRepositoryParams
 */

/**
 * @template {unknown} T
 * 
 * @typedef {object} ObjectedRepositoryProperties
 * @property {Record<PropertyKey, T | undefined>} object
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IRepository.js').IRepository<T>} IRepository
 */
