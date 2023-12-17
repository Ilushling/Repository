/**
 * @typedef {string | number} Key
 */

/**
 * @typedef {unknown | Model} Data
 * 
 * @typedef {object} Model
 * @property {() => Properties} getProperties
 * 
 * @typedef {Record<Key, unknown>} Properties
 */

/**
 * @typedef {Record<Key, unknown> | Storage | Repository} Context
 * 
 * @typedef {object} Storage
 * @property {(key: Key) => unknown} get
 * @property {() => Promise<Record<Key, unknown>>} getAll
 * @property {(key: Key, data: StorageData) => any} set
 * @property {(key: Key) => Promise<boolean>} has
 * @property {(key: Key) => any} remove
 * @property {() => any} clear
 * 
 * @typedef {unknown} StorageData
 */

/**
 * @typedef {object} ModelFactory
 * @property {(data: unknown) => unknown} create
 */

/**
 * @typedef {object} RepositoryParams
 * @property {Context} context
 * @property {ModelFactory=} modelFactory
 */
export default class Repository {
  /** @type {Storage} */
  #storage;

  /** @type {ModelFactory=} */
  #modelFactory;

  /** @param {RepositoryParams} params */
  constructor({ context, modelFactory }) {
    this.#storage = this.#createStorage(context);
    this.#modelFactory = modelFactory;
  }

  #getStorage() {
    return this.#storage;
  }

  /**
   * @param {Context} context
   */
  setContext(context) {
    const storage = this.#createStorage(context);

    this.#storage = storage;
  }

  /**
   * @param {Context} context
   */
  #createStorage(context) {
    /** @type {Storage} */ let storage;

    if (context instanceof Repository) {
      storage = /** @type {Repository} */ (context);
    } else if (
      'get' in context
      && 'getAll' in context
      && 'set' in context
      && 'has' in context
      && 'remove' in context
      && 'clear' in context
    ) {
      storage = /** @type {Storage} */ (context);
    } else {
      storage = {
        get: async key => context[key],
        getAll: async () => context,
        set: async (key, data) => context[key] = data,
        has: async key => key in context,
        remove: async key => delete context[key],
        clear: async () => {
          for (const key in context) {
            delete context[key];
          }
        }
      };
    }

    return storage;
  }

  /**
   * @param {Key} key
   */
  async get(key) {
    const storage = this.#getStorage();

    const data = await storage.get(key);

    const modelFactory = this.#modelFactory;
    if (modelFactory == null) {
      return data;
    }

    return modelFactory.create(data);
  }

  async getAll() {
    const storage = this.#getStorage();

    return storage.getAll();
  }

  /**
   * @param {Key} key
   */
  async has(key) {
    const storage = this.#getStorage();

    return storage.has(key);
  }

  /**
   * @param {Key} key
   * @param {Data} data
   */
  async set(key, data) {
    const storage = this.#getStorage();

    data = this.#getData(data);

    storage.set(key, data);
  }

  /**
   * @param {Key} key
   */
  async remove(key) {
    const storage = this.#getStorage();

    await storage.remove(key);
  }

  async clear() {
    const storage = this.#getStorage();

    await storage.clear();
  }

  /**
   * @param {Data} data
   */
  #getData(data) {
    if (
      data != null
      && typeof data === 'object'
      && 'getProperties' in data
      && typeof data.getProperties === 'function'
    ) {
      return data.getProperties();
    }

    return data;
  }
}
