/**
 * @typedef {object} IRepositoryFactory
 * @property {<T extends unknown>(
 *  repository: IRepository<T>
 * ) => IRepository<T>
 * } create
 * @property {<T extends unknown>(
 *  array: T[]
 * ) => IArrayedRepository<T>
 * } createArrayed
 * @property {<T extends Model<P>, P extends unknown>(
 *  repository: IRepository<P>,
 *  modelFactory: ModelFactory<T, P>
 * ) => IModeledRepository<T>
 * } createModeled
 * @property {<T extends unknown>(
 *  repository: IRepository<T>,
 *  key: Key
 * ) => IKeyedRepository<T>
 * } createKeyed
 * @property {<T extends unknown>(
 *  object: Record<Key, T | undefined>
 * ) => IRepository<T>
 * } createObjected
 */

/**
 * @import { IRepository, Key } from './IRepository.js'
 * 
 * @import { IArrayedRepository } from './IArrayedRepository.js'
 * @import { IModeledRepository, Model } from './IModeledRepository.js'
 * @import { IKeyedRepository } from './IKeyedRepository.js'
 * @import { ModelFactory } from './IModeledRepository.js'
 */
