/**
 * @template {unknown} T
 * 
 * @typedef {object} IRepository
 * @property {(key: Key) => Promise<T | undefined>} get
 * @property {(key: Key, data: T) => Promise<void>} set
 * 
 * @property {(key: Key) => Promise<boolean>} has
 * 
 * @property {(key: Key) => Promise<void>} remove
 * @property {() => Promise<void>} clear
 */

/**
 * @typedef {string | number} Key
 */
