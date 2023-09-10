# ms-ts

[![npm](https://img.shields.io/npm/v/ms-ts)](https://www.npmjs.com/package/ms-ts)

An alternative to [`ms` library](https://www.npmjs.com/package/ms) in the type world: exposes a `Ms` utility type which for a string in `ms` time format produces a number of milliseconds as a type.

```ts
import {type Ms, ms} from 'ms-ts';

const duration: Ms<'42ms'> = 42;
const duration: Ms<'42s'> = 42_000;
// Error: "Type '43000' is not assignable to type '42000'."
const duration: Ms<'42s'> = 43_000;

const config = {
  // In expressions, use `satisfies` and *never* `as`:
  duration1: 2_520_000 satisfies Ms<'42m'>,
  duration2: 271_296_000 satisfies Ms<'3.14d'>,
  // Or `ms` identity function:
  duration3: ms<Ms<'-3.14d'>>(-271_296_000),
};
```

## Installation

For npm, yarn & pnpm users respectively:

```shell
npm i ms-ts

yarn add ms-ts

pnpm i ms-ts
```

Minimum supported Node.js version is 14.

## Features

* Supported units:
  - `ms`, `msec(s)`, `millisecond(s)`
  - `s`, `sec(s)`, `second(s)`
  - `m`, `min(s)`, `minute(s)`
  - `h`, `hr(s)`, `hour(s)`
  - `d`, `day(s)`
  - `w`, `week(s)`
  - `y`, `yr(s)`, `year(s)` (**365.25** days, as in the [original implementation](https://github.com/vercel/ms/blob/78ce59eab01c197b9133bf9752ae01fbc11f4976/src/index.ts#LL7C15-L7C21))
* Supports negative & floating point numbers.
* Ignores whitespaces in the beginnig and end of the input string and between the number and the unit.
* Ignores leading zeroes.
* If parsing fails, returns `never` as the result.
* It does **not** performs an inverse conversion (number of milliseconds to a string with a unit).
* Check more usage examples in `test-d` directory of the repository.

## Recommended usage & pitfalls

When assigning the number of milliseconds, just declare the type after a variable name:

```ts
const duration: Ms<'42s'> = 42_000;
```

For type-checking to work in expressions, **always** use [`satisfies` operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) (TypeScript >= 4.9) and **never** use `as`:

```ts
const config = {
  duration1: 2_520_000 satisfies Ms<'42m'>, // ✅ Always use `satisfies` in expresions to assert a type
  duration2: 1 as Ms<'42m'>, // ❌ Avoid using `as`! No error!
};
```

You may also use an exported identity function<sup>1</sup> `ms` and pass the time string as a generic parameter:

```ts
import {Ms, ms} from 'ms-ts';

const config = {
  duration1: ms<'42m'>(2_520_000), // Forces you to pass `2_520_000`
};
```

---

<sup>1</sup> An identity function is a function that returns its first argument as does nothing else: `fn = (v) => v`.
