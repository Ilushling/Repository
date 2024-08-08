import assert from 'node:assert';
import { describe, it } from 'node:test';

import RepositoryFactory from '../src/Factory.js';

import KeyedRepository from '../src/KeyedRepository.js';
import ModeledRepository from '../src/ModeledRepository.js';
import ObjectedRepository from '../src/ObjectedRepository.js';

const repositoryFactory = new RepositoryFactory({
  KeyedRepository,
  ModeledRepository,
  ObjectedRepository
});

/**
 * @param {Record<PropertyKey, unknown>} object
 */
function createRepository(object) {
  return repositoryFactory.createObjected(object);
}

describe('Repository', () => {
  it('get', async () => {
    const object = {
      1: 2
    };

    const repository = createRepository(object);

    const data = await repository.get(1);

    assert.strictEqual(data, 2);
  });

  it('set', async () => {
    /** @type {Record<PropertyKey, unknown>} */
    const object = {};

    const repository = createRepository(object);

    await repository.set(1, 2);
    await repository.set('a', 'b');

    assert.deepStrictEqual(object, {
      1: 2,
      a: 'b'
    });
  });

  it('has', async () => {
    const object = {
      1: 2
    };

    const repository = createRepository(object);

    const has = await repository.has(1);

    assert.ok(has);
  });

  it('remove', async () => {
    const object = {
      1: 2
    };

    const repository = createRepository(object);

    await repository.remove(1);

    assert.deepStrictEqual(object, {});
  });

  it('clear', async () => {
    /** @type {Record<PropertyKey, unknown>} */
    const object = {};

    const repository = createRepository(object);

    await repository.set(1, 2);
    await repository.set('a', 'b');

    await repository.clear();

    assert.deepStrictEqual(object, {});
  });
});
