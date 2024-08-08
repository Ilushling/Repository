/**
 * @template {Model<unknown>} T
 * 
 * @typedef {object} IModeledRepository
 * @property {(key: Key) => Promise<T | undefined>} get
 * @property {(key: Key, model: T) => Promise<void>} set
 * 
 * @property {(key: Key) => Promise<boolean>} has
 * 
 * @property {(key: Key) => Promise<void>} remove
 * @property {() => Promise<void>} clear
 */

/**
 * @template {Model<P>} T
 * @template {unknown} P
 * 
 * @typedef {(properties: P) => T} ModelFactory
 */

/**
 * @template {unknown} P
 * 
 * @typedef {object} Model
 * @property {() => P} getProperties
 */

/**
 * @import { Key } from './IRepository.js'
 */
