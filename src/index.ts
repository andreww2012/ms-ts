import type {AllUnits, Ms} from './ms';

/**
 * Identity function that accepts a duration in milliseconds and returns it unchanged.
 * Pass the time string as the generic parameter to enforce the correct value at compile time.
 *
 * Handles integer and floating point numbers, leading and trailing whitespaces,
 * negative numbers.
 *
 * See {@link Ms} for more details and examples.
 * @example <caption>Enforce a specific duration value:</caption>
 * const duration = ms<'42m'>(2_520_000);
 * @example <caption>Negative and floating-point durations:</caption>
 * const duration = ms<'-3.14d'>(-271_296_000);
 */
export const ms = <S extends `${number}${AllUnits}`>(milliseconds: Ms<S>) => milliseconds;

export type {Ms, AllUnits} from './ms';
