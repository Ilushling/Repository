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
 * @typedef {import('./IRepository.js').Key} Key
 */

/**
 * @template {unknown} T
 * @template {unknown} P
 * 
 * @typedef {(properties: P) => T} ModelFactory
 */
