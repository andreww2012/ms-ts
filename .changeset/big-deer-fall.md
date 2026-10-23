---
'ms-ts': minor
---

`Ms` and `ms` now parse strings like `ms` does:

- Numbers without a unit are supported and are in milliseconds (e.g. `Ms<'100'>` is `100`)
- Mixed-case units like `Ms<'1 Hours'>` no longer resolve to `never`, as units are case-insensitive
- Numbers like `0.5`, `.5`, `1.0` or `1.50` give exact values instead of `number`
- A fractional number followed by spaces before the unit (like `Ms<'1.5 hours'>`) no longer resolves to `never`
- Numbers with spaces or a minus inside them (like `Ms<'1 5h'>` or `Ms<'1-2h'>`) or with no digits after the dot (like `Ms<'1.h'>`) now resolve to `never`
- Tabs and other whitespace work like spaces
- Each string in a union is parsed on its own: `Ms<'1s' | '2h'>` no longer allows `2000` or `3_600_000`
- The `ms` function accepts all strings that `Ms` does (like `'1s '` or `'- 1s'`), and calling it without a time string (`ms(1000)`) is now an error
