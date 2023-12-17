import assert from 'node:assert';
import { describe, it } from 'node:test';

import Repository from '../src/Repository.js';

/**
 * @typedef {import('../src/Repository.js').RepositoryParams} RepositoryParams
 * 
 * @typedef {import('../src/Repository.js').Context} Context
 */

/** @param {RepositoryParams} params */
function createRepository({ context, modelFactory }) {
  return new Repository({
    context,
    modelFactory
  });
}

describe('Repository', () => {
  it('get', async () => {
    /** @type {Context} */
    const context = {
      1: 2
    };

    const repository = createRepository({ context });

    const data = await repository.get(1);

    assert.strictEqual(data, 2);
  });

  it('getAll', async () => {
    /** @type {Context} */
    const context = {
      1: 2
    };

    const repository = createRepository({ context });

    const data = await repository.getAll();

    assert.deepStrictEqual(data, {
      1: 2
    });
  });

  it('set', async () => {
    /** @type {Context} */
    const context = {};

    const repository = createRepository({ context });

    await repository.set(1, 2);
    await repository.set('a', 'b');

    assert.deepStrictEqual(context, {
      1: 2,
      a: 'b'
    });
  });

  it('has', async () => {
    /** @type {Context} */
    const context = {
      1: 2
    };

    const repository = createRepository({ context });

    const has = await repository.has(1);

    assert.ok(has);
  });

  it('remove', async () => {
    /** @type {Context} */
    const context = {
      1: 2
    };

    const repository = createRepository({ context });

    await repository.remove(1);

    assert.deepStrictEqual(context, {});
  });

  it('clear', async () => {
    /** @type {Context} */
    const context = {};

    const repository = createRepository({ context });

    await repository.set(1, 2);
    await repository.set('a', 'b');

    await repository.clear();

    assert.deepStrictEqual(context, {});
  });

  describe('Storage context', () => {
    it('get', async () => {
      /** @type {Context} */
      const context = {
        1: 2
      };

      const repository = createRepository({ context });

      const subRepository = createRepository({ context: repository });

      const data = await subRepository.get(1);

      assert.strictEqual(data, 2);
    });
  });
});
