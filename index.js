import RepositoryFactory from './src/Factory.js';

import KeyedRepository from './src/KeyedRepository.js';
import ModeledRepository from './src/ModeledRepository.js';
import ObjectedRepository from './src/ObjectedRepository.js';

export default {
  RepositoryFactory,

  KeyedRepository,
  ModeledRepository,
  ObjectedRepository,
};

/**
 * @typedef {import('./src/IFactory.js').IRepositoryFactory} IRepositoryFactory
 */

//#region Repository
/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/IRepository.js').IRepository<T>} IRepository
 * @typedef {import('./src/IRepository.js').RepositoryConstructable} RepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/IRepository.js').RepositoryParams<T>} RepositoryParams
 */
//#endregion

//#region Keyed
/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/IKeyedRepository.js').IKeyedRepository<T>} IKeyedRepository
 * @typedef {import('./src/IKeyedRepository.js').KeyedRepositoryConstructable} KeyedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/IKeyedRepository.js').KeyedRepositoryParams<T>} KeyedRepositoryParams
 */
//#endregion

//#region Modeled
/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/IModeledRepository.js').IModeledRepository<T>} IModeledRepository
 * @typedef {import('./src/IModeledRepository.js').ModeledRepositoryConstructable} ModeledRepositoryConstructable
 */

/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @typedef {import('./src/IModeledRepository.js').ModeledRepositoryParams<T, P>} ModeledRepositoryParams
 */
//#endregion

//#region Objected
/**
 * @typedef {import('./src/IObjectedRepository.js').ObjectedRepositoryConstructable} ObjectedRepositoryConstructable
 */

/**
 * @template {unknown} T
 * 
 * @typedef {import('./src/IObjectedRepository.js').ObjectedRepositoryParams<T>} ObjectedRepositoryParams
 */
//#endregion
