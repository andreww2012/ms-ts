## 1.2.0

### Minor Changes

- [`a1b36ab`](https://github.com/andreww2012/ms-ts/commit/a1b36ab82ef1a43ff53f8d83ca15e9ea5f2b1601) - `Ms` and `ms` now parse strings like `ms` does:
  
  - Numbers without a unit are supported and are in milliseconds (e.g. `Ms<'100'>` is `100`)
  - Mixed-case units like `Ms<'1 Hours'>` no longer resolve to `never`, as units are case-insensitive
  - Numbers like `0.5`, `.5`, `1.0` or `1.50` give exact values instead of `number`
  - A fractional number followed by spaces before the unit (like `Ms<'1.5 hours'>`) no longer resolves to `never`
  - Numbers with spaces or a minus inside them (like `Ms<'1 5h'>` or `Ms<'1-2h'>`) or with no digits after the dot (like `Ms<'1.h'>`) now resolve to `never`
  - Tabs and other whitespace work like spaces
  - Each string in a union is parsed on its own: `Ms<'1s' | '2h'>` no longer allows `2000` or `3_600_000`
  - The `ms` function accepts all strings that `Ms` does (like `'1s '` or `'- 1s'`), and calling it without a time string (`ms(1000)`) is now an error

## 1.1.0

### Minor Changes

- 523b06f: Supported Node.js versions are now `^22.23.1 || ^24.18.0 || >=26.4.0`. `ms-ts/package.json` is now exported, and the `main` field is removed

## 1.0.0

### Major Changes

- 172ce7b: Set minimum Node.js version to 22. Migrated to `tsdown` for bundling

### Minor Changes

- 7cffb34: Added JSDoc comments for the exported symbols (`Ms` type and `ms` function).
- bd30e45: `type-fest` and `ts-arithmetic` packages are now inlined, leaving `ms-ts` with zero-dependencies

## 1.0.0-beta.2

### Minor Changes

- bd30e45: `type-fest` and `ts-arithmetic` packages are now inlined, leaving `ms-ts` with zero-dependencies

## 1.0.0-beta.1

### Minor Changes

- 7cffb34: Added JSDoc comments for the exported symbols (`Ms` type and `ms` function).

## 1.0.0-beta.0

### Major Changes

- 172ce7b: Set minimum Node.js version to 22. Migrated to `tsdown` for bundling

## 0.0.1

Initial release.
