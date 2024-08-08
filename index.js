import RepositoryFactory from './src/Factory.js';

import ArrayedRepository from './src/ArrayedRepository.js';
import ModeledRepository from './src/ModeledRepository.js';
import KeyedRepository from './src/KeyedRepository.js';
import ObjectedRepository from './src/ObjectedRepository.js';

/**
 * @import { IRepositoryFactory } from './src/interfaces/IFactory.js'
 * 
 * @import { IRepository } from './src/interfaces/IRepository.js'
 * @import { IArrayedRepository } from './src/interfaces/IArrayedRepository.js'
 * @import { IModeledRepository, Model } from './src/interfaces/IModeledRepository.js'
 * @import { IKeyedRepository } from './src/interfaces/IKeyedRepository.js'
 */

export {
  RepositoryFactory,

  ArrayedRepository,
  ModeledRepository,
  KeyedRepository,
  ObjectedRepository
};

/**
 * @typedef {IRepositoryFactory} IRepositoryFactory
 */

/**
 * @template {unknown} T
 * 
 * @typedef {IRepository<T>} IRepository
 */

/**
 * @template {unknown} T
 * 
 * @typedef {IArrayedRepository<T>} IArrayedRepository
 */

/**
 * @template {Model<unknown>} T
 * 
 * @typedef {IModeledRepository<T>} IModeledRepository
 */

/**
 * @template {unknown} T
 * 
 * @typedef {Model<T>} Model
 */

/**
 * @template {unknown} T
 * 
 * @typedef {IKeyedRepository<T>} IKeyedRepository
 */
