# Range-at-Index-Typescript

A Typescript package that returns a Range instance selecting text within an HTML Element, at start and end offsets Stars

## Installation

```bash
npm install range-at-index-typescript
```

or

```bash
yarn add range-at-index-typescript
```

## Usage

```ts
import { rangeAtIndex } from 'range-at-index-typescript';
```

or

```ts
const { rangeAtIndex } = require('range-at-index-typescript');
```

### API Documentation

```ts
RangeAtIndex({ el, index, offset, range }: {
    el: Element;
    index?: number;
    offset?: number;
    range?: Range;
}): Range
```

## For Contributes

### Commands

The main files are inside `/src`.

To run project, use:

```bash
npm install
```

then

```bash
npm run start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

### Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

### Optimizations

Please see the main [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

### Named Exports

[always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.
