import type {Multiply} from 'ts-arithmetic';
import type {Trim} from 'type-fest';

/* Utility types */

type NonEmptyString<T extends string> = '' extends T ? never : T;

type IsFirstCharDigit<T extends string> = T extends `${number}`
  ? T extends ' '
    ? false
    : true
  : false;

type OrPlural<T extends string> = T | `${T}s`;

/* Units */

type PostfixesToMilliseconds = Record<'ms' | OrPlural<'msec' | 'millisecond'>, 1> &
  Record<'s' | OrPlural<'sec' | 'second'>, 1000> &
  Record<'m' | OrPlural<'min' | 'minute'>, 60_000> &
  Record<'h' | OrPlural<'hr' | 'hour'>, 3_600_000> &
  Record<'d' | OrPlural<'day'>, 86_400_000> &
  Record<'w' | OrPlural<'week'>, 604_800_000> &
  Record<'y' | OrPlural<'yr' | 'year'>, 31_557_600_000>; // 365.25 days (see https://github.com/vercel/ms/blob/78ce59eab01c197b9133bf9752ae01fbc11f4976/src/index.ts#LL7C15-L7C21)

type AllUnitsLowercase = keyof PostfixesToMilliseconds;
export type AllUnits =
  | AllUnitsLowercase
  | Uppercase<AllUnitsLowercase>
  // eslint-disable-next-line ts/no-duplicate-type-constituents -- false positive
  | Lowercase<AllUnitsLowercase>;

/* Number parsers */

type ParseFraction<
  T extends string,
  Parsed extends string,
  Negative extends boolean,
> = T extends `${infer First}${infer Rest}`
  ? First extends `${infer Digit}`
    ? IsFirstCharDigit<Digit> extends true
      ? ParseFraction<Rest, `${Parsed}${First}`, Negative>
      : [
          Parsed extends '' ? never : Negative extends true ? `-${Parsed}` : Parsed,
          `${First}${Rest}`,
        ]
    : [Parsed extends '' ? never : Negative extends true ? `-${Parsed}` : Parsed, `${First}${Rest}`]
  : [Parsed extends '' ? never : Negative extends true ? `-${Parsed}` : Parsed, ''];

type ParseFloat<
  T extends string,
  Parsed extends string = '',
  Negative extends boolean = false,
> = T extends `${infer First}${infer Rest}`
  ? First extends ' '
    ? ParseFloat<Rest, Parsed, Negative>
    : First extends '-'
      ? Negative extends true
        ? never
        : ParseFloat<Rest, Parsed, true>
      : First extends '.'
        ? ParseFraction<Rest, `${Parsed}${First}`, Negative>
        : First extends `${infer Digit}`
          ? IsFirstCharDigit<Digit> extends true
            ? ParseFloat<Rest, `${Parsed}${Digit}`, Negative>
            : [Parsed extends '' ? never : Negative extends true ? `-${Parsed}` : Parsed, T]
          : [Parsed extends '' ? never : Negative extends true ? `-${Parsed}` : Parsed, T]
  : [Parsed extends '' ? never : Negative extends true ? `-${Parsed}` : Parsed, ''];

type ParseInt<T> = T extends '-0'
  ? 0
  : T extends `-0${NonEmptyString<infer N>}`
    ? ParseInt<`-${N}`>
    : T extends `0${NonEmptyString<infer N>}`
      ? ParseInt<N>
      : T extends ` ${NonEmptyString<infer N>}`
        ? ParseInt<N>
        : T extends `${NonEmptyString<infer N>} `
          ? ParseInt<N>
          : T extends `${infer N extends number}`
            ? N
            : never;

/* Internal type */

type MsInternal<T extends [string, string], Num = T[0], Unit = T[1]> = Unit extends AllUnits
  ? Multiply<ParseInt<Num>, PostfixesToMilliseconds[Lowercase<Unit>]>
  : never;

/* PUBLIC TYPE */

/**
 * Type which receives a duration string in [`ms` format](https://npmx.dev/ms) and
 * evaluates to the duration in milliseconds.
 *
 * Handles integer and floating point numbers, leading and trailing whitespaces,
 * negative numbers.
 * @example <caption>Basic usage — declare the type after a variable name:</caption>
 * const duration: Ms<'42s'> = 42_000;
 * @example <caption>Use `satisfies` (not `as`!) to assert a type in expressions:</caption>
 * const config = {
 *   duration1: 2_520_000 satisfies Ms<'42m'>,
 *   duration2: 271_296_000 satisfies Ms<'3.14d'>,
 * };
 * @example <caption>Supported units (case-insensitive):</caption>
 * type A = Ms<'1ms'>;   // 1             (milliseconds)
 * type B = Ms<'1s'>;    // 1_000         (seconds)
 * type C = Ms<'1m'>;    // 60_000        (minutes)
 * type D = Ms<'1h'>;    // 3_600_000     (hours)
 * type E = Ms<'1d'>;    // 86_400_000    (days)
 * type F = Ms<'1w'>;    // 604_800_000   (weeks)
 * type G = Ms<'1y'>;    // 31_557_600_000 (years, 365.25 days)
 * @example <caption>Unit aliases are supported:</caption>
 * type A = Ms<'1millisecond'>; // 1
 * type B = Ms<'1 seconds'>;    // 1_000
 * type C = Ms<'1 mins'>;       // 60_000
 * type D = Ms<'1 hour'>;       // 3_600_000
 * @example <caption>Negative numbers, floating-point numbers, whitespace trimming, leading zeroes:</caption>
 * type A = Ms<'-42s'>;      // -42_000
 * type B = Ms<'3.14d'>;     // 271_296_000
 * type C = Ms<'  010ms  '>; // 10
 * @example <caption>Invalid inputs resolve to `never`:</caption>
 * type A = Ms<'s'>;      // never — missing number
 * type B = Ms<'--42ms'>; // never — double minus
 * type C = Ms<'42mss'>;  // never — unknown unit
 */
export type Ms<T extends string> = MsInternal<ParseFloat<Trim<T>>>;
