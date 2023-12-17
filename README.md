# Repository
Repository

- [Usage](#usage).

## Usage
1) [Prepare](#prepare);
2) [Commands](#commands).


### Prepare
1) [(Optional) Import types](#import-types);
2) [Prepare context](#prepare-context);
3) [Create repository](#create-repository).

#### Import types
```js
/**
 * @typedef {import('repository').Context} Context
 */
```

#### Prepare context
```js
/** @type {Context} */
const context = {};
```

#### Create repository
```js
return new Repository({
  context,
  modelFactory
});
```

### Commands
1) [Get](#get);
2) [Set](#set);
3) [Get all](#get-all);
4) [Has](#has);
5) [Remove](#remove);
6) [Clear](#clear).

#### Get
```js
const data = await repository.set('key');
```

#### Set
```js
await repository.set('key', 'data');
```

#### Get all
```js
const data = await repository.getAll();
```

#### Has
```js
const has = await repository.has(1);
```

#### Remove
```js
await repository.remove(1);
```

#### Clear
```js
await repository.clear();
```
