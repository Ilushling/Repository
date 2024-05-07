/**
 * @template {unknown} T
 * 
 * @typedef {object} IArrayedRepository
 * @property {(index: number) => Promise<T | undefined>} get
 * @property {(index: number, data: T) => Promise<void>} set
 * @property {(data: T) => Promise<void>} add
 * @property {(index: number) => Promise<boolean>} has
 * @property {(index: number) => Promise<void>} remove
 * @property {() => Promise<void>} clear
 */
