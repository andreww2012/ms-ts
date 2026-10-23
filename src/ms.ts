import type {Multiply} from 'ts-arithmetic';
import type {Trim} from 'type-fest';

/* Utility types */

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

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
export type AllUnits = AllUnitsLowercase | Uppercase<AllUnitsLowercase>;

// A number without a unit is in milliseconds, like in `ms`
type UnitToMilliseconds<Unit extends string> = Unit extends ''
  ? 1
  : Unit extends AllUnitsLowercase
    ? PostfixesToMilliseconds[Unit]
    : never;

/* Number parsers */

type ParseDigits<
  T extends string,
  Digits extends string = '',
> = T extends `${infer First extends Digit}${infer Rest}`
  ? ParseDigits<Rest, `${Digits}${First}`>
  : [Digits, T];

type NormalizeInteger<T extends string> = T extends `0${infer Rest}`
  ? NormalizeInteger<Rest>
  : T extends ''
    ? '0'
    : T;

type NormalizeFraction<T extends string> = T extends `${infer Rest}0`
  ? NormalizeFraction<Rest>
  : T extends ''
    ? ''
    : `.${T}`;

// Only numbers written the way JS writes them (`0.5`, not `00.50`) are inferred as literals
type ToNumber<
  Sign extends '' | '-',
  Integer extends string,
  Fraction extends string,
  Unsigned extends string = `${NormalizeInteger<Integer>}${NormalizeFraction<Fraction>}`,
> = Unsigned extends '0' ? 0 : `${Sign}${Unsigned}` extends `${infer N extends number}` ? N : never;

// Returns the number and the rest of the string. Like in `ms`, `.5` is valid and `1.` is not
type ParseUnsigned<T extends string, Sign extends '' | '-'> =
  ParseDigits<T> extends [infer Integer extends string, infer Rest extends string]
    ? Rest extends `.${infer AfterDot}`
      ? ParseDigits<AfterDot> extends [infer Fraction extends string, infer Unit extends string]
        ? Fraction extends ''
          ? never
          : [ToNumber<Sign, Integer, Fraction>, Unit]
        : never
      : Integer extends ''
        ? never
        : [ToNumber<Sign, Integer, ''>, Rest]
    : never;

type ParseNumber<T extends string> = T extends `-${infer Rest}`
  ? ParseUnsigned<Trim<Rest>, '-'>
  : ParseUnsigned<T, ''>;

/* Internal type */

// Distributes over a union of parsed inputs, so that each number stays with its own unit
type MsInternal<T> = T extends [infer Value extends number, infer Unit extends string]
  ? Multiply<Value, UnitToMilliseconds<Lowercase<Trim<Unit>>>>
  : never;

/* PUBLIC TYPE */

/**
 * Type which receives a duration string in [`ms` format](https://npmx.dev/ms) and
 * evaluates to the duration in milliseconds.
 *
 * Handles integer and floating point numbers, leading and trailing whitespaces,
 * negative numbers.
 * A number without a unit is in milliseconds.
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
 * type H = Ms<'1'>;     // 1             (no unit, milliseconds)
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
 * type D = Ms<'1.h'>;    // never — no digits after the dot
 */
export type Ms<T extends string> = MsInternal<ParseNumber<Trim<T>>>;
