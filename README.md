# ms-ts

[![package version and a link to the npmx page](https://img.shields.io/npm/v/ms-ts)](https://npmx.dev/ms-ts)

An alternative to [the `ms` library](https://npmx.dev/ms) in the type world: exposes a `Ms` utility type which, for a string in `ms` time format, produces the number of milliseconds as a type.

```ts
import {type Ms, ms} from 'ms-ts';

const duration1: Ms<'42ms'> = 42;
const duration2: Ms<'42s'> = 42_000;
// Error: "Type '43000' is not assignable to type '42000'."
const duration3: Ms<'42s'> = 43_000;

const config = {
  // In expressions, use `satisfies` and *never* `as`:
  duration1: 2_520_000 satisfies Ms<'42m'>,
  duration2: 271_296_000 satisfies Ms<'3.14d'>,
  // Or `ms` identity function:
  duration3: ms<'-3.14d'>(-271_296_000),
};
```

## Installation

For pnpm, npm & yarn users respectively:

```sh
pnpm i ms-ts
npm i ms-ts
yarn add ms-ts
```

Minimum supported Node.js version is 22 (although it will very likely work in older versions).

## Features

- Supported units:
  - `ms`, `msec(s)`, `millisecond(s)`
  - `s`, `sec(s)`, `second(s)`
  - `m`, `min(s)`, `minute(s)`
  - `h`, `hr(s)`, `hour(s)`
  - `d`, `day(s)`
  - `w`, `week(s)`
  - `y`, `yr(s)`, `year(s)` (**365.25** days, as in the [original implementation](https://github.com/vercel/ms/blob/78ce59eab01c197b9133bf9752ae01fbc11f4976/src/index.ts#LL7C15-L7C21))
- Unit names are case-insensitive (e.g. `'42MS'`, `'42S'` are valid).
- Supports negative & floating point numbers.
- Ignores whitespace at the beginning and end of the input string, between the sign and the number, and between the number and the unit.
- Ignores leading zeroes.
- If parsing fails, returns `never` as the result.
- It does **not** perform an inverse conversion (number of milliseconds to a string with a unit).
- Check more usage examples in the `test` directory of the repository.
- Has **zero dependencies**: types from [`type-fest`](https://npmx.dev/type-fest) and [`ts-arithmetic`](https://npmx.dev/ts-arithmetic) are inlined directly into the package rather than declared as dependencies<sup>2</sup> because they are not supposed to change anyway.

## Recommended usage & pitfalls

When assigning the number of milliseconds, just declare the type after a variable name:

```ts
const duration: Ms<'42s'> = 42_000;
```

For type-checking to work in expressions, **always** use [`satisfies` operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) (TypeScript >= 4.9) and **never** use `as`:

```ts
const config = {
  duration1: 2_520_000 satisfies Ms<'42m'>, // ✅ Always use `satisfies` in expressions to assert a type
  duration2: 1 as Ms<'42m'>, // ❌ Avoid using `as`! No error!
};
```

You may also use an exported identity function<sup>1</sup> `ms` and pass the time string as a generic parameter:

```ts
import {type Ms, ms} from 'ms-ts';

const config = {
  duration1: ms<'42m'>(2_520_000), // Forces you to pass `2_520_000`
};
```

---

<sup>1</sup> An identity function is a function that returns its first argument and does nothing else: `fn = (v) => v`.

<sup>2</sup> Their copyright notices are preserved in [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md).

## Contributors

<!-- eslint-disable markdown-preferences/padding-line-between-blocks, markdown/require-alt-text -->
<!-- cspell:disable -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/andreww2012"><img src="https://avatars.githubusercontent.com/u/6554045?v=4?s=70" width="70px;" alt="Andrew Kazakov"/><br /><sub><b>Andrew Kazakov</b></sub></a><br /><a href="https://github.com/andreww2012/ms-ts/commits?author=andreww2012" title="Code">💻</a> <a href="https://github.com/andreww2012/ms-ts/commits?author=andreww2012" title="Documentation">📖</a> <a href="#example-andreww2012" title="Examples">💡</a> <a href="#infra-andreww2012" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-andreww2012" title="Maintenance">🚧</a> <a href="https://github.com/andreww2012/ms-ts/commits?author=andreww2012" title="Tests">⚠️</a> <a href="#tool-andreww2012" title="Tools">🔧</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- eslint-enable markdown-preferences/padding-line-between-blocks, markdown/require-alt-text -->

<!-- cspell:enable -->
