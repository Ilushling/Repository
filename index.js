import RepositoryFactory from './src/Factory.js';

import ArrayedRepository from './src/ArrayedRepository.js';
import ModeledRepository from './src/ModeledRepository.js';
import KeyedRepository from './src/KeyedRepository.js';
import ObjectedRepository from './src/ObjectedRepository.js';

export {
  RepositoryFactory,

  ArrayedRepository,
  ModeledRepository,
  KeyedRepository,
  ObjectedRepository
};

/**
 * @typedef {import('./src/interfaces/IFactory.js').IRepositoryFactory} IRepositoryFactory
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/interfaces/IRepository.js').IRepository<T>} IRepository
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/interfaces/IArrayedRepository.js').IArrayedRepository<T>} IArrayedRepository
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/interfaces/IModeledRepository.js').IModeledRepository<T>} IModeledRepository
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/interfaces/IKeyedRepository.js').IKeyedRepository<T>} IKeyedRepository
 */
