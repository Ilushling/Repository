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
