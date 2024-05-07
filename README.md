# Repository
Repository.

- [Usage](#usage).

## Usage
1) [Prepare](#prepare);
2) [Commands](#commands).

### Prepare
1) [Import types](#import-types);
2) [Create repository](#create-repository).

#### Import types
```js
/**
 * @template {unknown} T
 * 
 * @typedef {import('reposy').IRepository<T>} IRepository
 */
```

#### Create repository
```js
import {
  RepositoryFactory,

  ArrayedRepository,
  ModeledRepository,
  KeyedRepository,
  ObjectedRepository
} from 'reposy';

const repositoryFactory = new RepositoryFactory({
  Arrayed: ArrayedRepository,
  Modeled: ModeledRepository,
  Keyed: KeyedRepository,
  Objected: ObjectedRepository
});

/** @type {Record<PropertyKey, unknown>} */
const object = {};

const repository = repositoryFactory.createObjected(object);
```

### Commands
1) [Get](#get);
2) [Set](#set);
3) [Has](#has);
4) [Remove](#remove);
5) [Clear](#clear).

#### Get
```js
const data = await repository.set('key');
```

#### Set
```js
await repository.set('key', 'data');
```

#### Has
```js
const has = await repository.has('key');
```

#### Remove
```js
await repository.remove('key');
```

#### Clear
```js
await repository.clear();
```
