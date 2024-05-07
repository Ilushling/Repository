/**
 * @typedef {object} IRepositoryFactory
 * @property {<T>(repository: IRepository<T>) => IRepository<T>} create
 * @property {<T>(array: T[]) => IArrayedRepository<T>} createArrayed
 * @property {<T, P>(repository: IRepository<P>, modelFactory: ModelFactory<T, P>) => IModeledRepository<T>} createModeled
 * @property {<T>(repository: IRepository<T>, key: Key) => IKeyedRepository<T>} createKeyed
 * @property {<T>(object: Record<PropertyKey, T | undefined>) => IRepository<T>} createObjected
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IRepository.js').IRepository<T>} IRepository
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IArrayedRepository.js').IArrayedRepository<T>} IArrayedRepository
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IModeledRepository.js').IModeledRepository<T>} IModeledRepository
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./IKeyedRepository.js').IKeyedRepository<T>} IKeyedRepository
 */

/**
 * @typedef {import('./IRepository.js').Key} Key
 */

/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @typedef {import('./IModeledRepository.js').ModelFactory<T, P>} ModelFactory
 */
