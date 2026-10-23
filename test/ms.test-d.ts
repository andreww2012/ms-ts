/* eslint-disable un/no-multiple-consecutive-spaces */
import {ms} from '../src/index.ts';
import type {Ms} from '../src/ms.ts';

describe('milliseconds', () => {
  it('zero', () => {
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'0ms'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'0ms'>>();
  });

  it('integer', () => {
    expectTypeOf(1 as const).toEqualTypeOf<Ms<'1ms'>>();
    expectTypeOf(10 as const).not.toEqualTypeOf<Ms<'1ms'>>();

    expectTypeOf(42 as const).toEqualTypeOf<Ms<'42ms'>>();
    expectTypeOf(41 as const).not.toEqualTypeOf<Ms<'42ms'>>();
  });

  it('float', () => {
    // eslint-disable-next-line unicorn/prefer-math-constants -- Not an approximation of π
    expectTypeOf(3.14 as const).toEqualTypeOf<Ms<'3.14ms'>>();
    expectTypeOf(4 as const).not.toEqualTypeOf<Ms<'3.14ms'>>();
    expectTypeOf(3 as const).not.toEqualTypeOf<Ms<'3.14ms'>>();

    // eslint-disable-next-line unicorn/prefer-math-constants -- Not an approximation of π
    expectTypeOf(3.14 as const).toEqualTypeOf<Ms<'3.14 ms'>>();
    // eslint-disable-next-line unicorn/prefer-math-constants -- Not an approximation of π
    expectTypeOf(-3.14 as const).toEqualTypeOf<Ms<'-3.14   milliseconds'>>();

    expectTypeOf(0.5 as const).toEqualTypeOf<Ms<'0.5ms'>>();
    expectTypeOf(0.5 as const).toEqualTypeOf<Ms<'.5ms'>>();
    expectTypeOf(-0.5 as const).toEqualTypeOf<Ms<'-0.5ms'>>();
    expectTypeOf(-0.5 as const).toEqualTypeOf<Ms<'-.5ms'>>();
    expectTypeOf(1.5 as const).toEqualTypeOf<Ms<'01.50ms'>>();
    expectTypeOf(1 as const).toEqualTypeOf<Ms<'1.0ms'>>();
  });

  it('negative', () => {
    expectTypeOf(-42 as const).toEqualTypeOf<Ms<'-42ms'>>();
    expectTypeOf(42 as const).not.toEqualTypeOf<Ms<'-42ms'>>();

    expectTypeOf(-42 as const).toEqualTypeOf<Ms<'- 42ms'>>();
    expectTypeOf(42 as const).not.toEqualTypeOf<Ms<'- 42ms'>>();

    expectTypeOf(-42 as const).toEqualTypeOf<Ms<'-   42ms'>>();
    expectTypeOf(42 as const).not.toEqualTypeOf<Ms<'-   42ms'>>();
  });

  it('unit aliases', () => {
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234msec'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234msecs'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234millisecond'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234milliseconds'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234 msec'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234 msecs'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234 millisecond'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234 milliseconds'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234   msec'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234   msecs'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234   millisecond'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234   milliseconds'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234 Ms'>>();
    expectTypeOf(1234 as const).toEqualTypeOf<Ms<'1234 MilliSeconds'>>();
  });

  it('trimming', () => {
    expectTypeOf(-1 as const).toEqualTypeOf<Ms<'-01ms'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-0ms'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-00ms'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-000ms'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<' -000ms'>>();
    expectTypeOf(10 as const).toEqualTypeOf<Ms<'  010ms'>>();
    expectTypeOf(-10 as const).toEqualTypeOf<Ms<'  -010ms'>>();
    expectTypeOf(-1 as const).toEqualTypeOf<Ms<'-01ms '>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-0ms '>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-00ms '>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-000ms '>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<' -000ms  '>>();
    expectTypeOf(10 as const).toEqualTypeOf<Ms<'  010ms  '>>();
    expectTypeOf(-10 as const).toEqualTypeOf<Ms<'  -010ms  '>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<'ms'>>().toBeNever();
    expectTypeOf<Ms<'--ms'>>().toBeNever();
    expectTypeOf<Ms<'--42ms'>>().toBeNever();
    expectTypeOf<Ms<'42mss'>>().toBeNever();
    expectTypeOf<Ms<'4 2ms'>>().toBeNever();
    expectTypeOf<Ms<'4-2ms'>>().toBeNever();
    expectTypeOf<Ms<'42 -ms'>>().toBeNever();
    expectTypeOf<Ms<'1.ms'>>().toBeNever();
    expectTypeOf<Ms<'.ms'>>().toBeNever();
  });
});

describe('seconds', () => {
  it('zero', () => {
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'0s'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'0s'>>();

    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-0s'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-000s'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-0s'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-000s'>>();
  });

  it('integer', () => {
    expectTypeOf(1000 as const).toEqualTypeOf<Ms<'1s'>>();
    expectTypeOf(2000 as const).not.toEqualTypeOf<Ms<'1s'>>();

    expectTypeOf(1000 as const).toEqualTypeOf<Ms<'001s'>>();
    expectTypeOf(-1000 as const).not.toEqualTypeOf<Ms<'001s'>>();

    expectTypeOf(42_000 as const).toEqualTypeOf<Ms<'42s'>>();
    expectTypeOf(-42_000 as const).not.toEqualTypeOf<Ms<'42s'>>();
  });

  it('negative integer', () => {
    expectTypeOf(-1000 as const).toEqualTypeOf<Ms<'-001s'>>();
    expectTypeOf(1000 as const).not.toEqualTypeOf<Ms<'-001s'>>();

    expectTypeOf(-42_000 as const).toEqualTypeOf<Ms<'-42s'>>();
    expectTypeOf(42_000 as const).not.toEqualTypeOf<Ms<'-42s'>>();
  });

  it('float', () => {
    expectTypeOf(3140 as const).toEqualTypeOf<Ms<'3.14s'>>();
    expectTypeOf(-3140 as const).not.toEqualTypeOf<Ms<'3.14s'>>();

    expectTypeOf(-3140 as const).toEqualTypeOf<Ms<'-3.14s'>>();
    expectTypeOf(3140 as const).not.toEqualTypeOf<Ms<'-3.14s'>>();

    expectTypeOf(3140 as const).toEqualTypeOf<Ms<'3.14 s'>>();
    expectTypeOf(-3140 as const).toEqualTypeOf<Ms<'-3.14   seconds'>>();

    expectTypeOf(500 as const).toEqualTypeOf<Ms<'0.5s'>>();
    expectTypeOf(500 as const).toEqualTypeOf<Ms<'.5s'>>();
    expectTypeOf(-500 as const).toEqualTypeOf<Ms<'-0.5s'>>();
    expectTypeOf(-500 as const).toEqualTypeOf<Ms<'-.5s'>>();
    expectTypeOf(1500 as const).toEqualTypeOf<Ms<'01.50s'>>();
    expectTypeOf(1000 as const).toEqualTypeOf<Ms<'1.0s'>>();
  });

  it('unit aliases', () => {
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 s'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 sec'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 secs'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 second'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 seconds'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234   seconds'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'   1234   seconds   '>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 Sec'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 Seconds'>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<'s'>>().toBeNever();
    expectTypeOf<Ms<'--s'>>().toBeNever();
    expectTypeOf<Ms<'--42s'>>().toBeNever();
    expectTypeOf<Ms<'42ss'>>().toBeNever();
    expectTypeOf<Ms<'4 2s'>>().toBeNever();
    expectTypeOf<Ms<'4-2s'>>().toBeNever();
    expectTypeOf<Ms<'42 -s'>>().toBeNever();
    expectTypeOf<Ms<'1.s'>>().toBeNever();
    expectTypeOf<Ms<'.s'>>().toBeNever();
  });
});

describe('minutes', () => {
  it('zero', () => {
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'0m'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'0m'>>();

    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-0m'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-000m'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-0m'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-000m'>>();
  });

  it('integer', () => {
    expectTypeOf(60_000 as const).toEqualTypeOf<Ms<'1m'>>();
    expectTypeOf(-60_000 as const).not.toEqualTypeOf<Ms<'1m'>>();

    expectTypeOf(60_000 as const).toEqualTypeOf<Ms<'001m'>>();
    expectTypeOf(-60_000 as const).not.toEqualTypeOf<Ms<'001m'>>();

    expectTypeOf(2_520_000 as const).toEqualTypeOf<Ms<'42m'>>();
    expectTypeOf(-2_520_000 as const).not.toEqualTypeOf<Ms<'42m'>>();
  });

  it('negative integer', () => {
    expectTypeOf(-60_000 as const).toEqualTypeOf<Ms<'-001m'>>();
    expectTypeOf(60_000 as const).not.toEqualTypeOf<Ms<'-001m'>>();

    expectTypeOf(-2_520_000 as const).toEqualTypeOf<Ms<'-42m'>>();
    expectTypeOf(2_520_000 as const).not.toEqualTypeOf<Ms<'-42m'>>();
  });

  it('float', () => {
    expectTypeOf(188_400 as const).toEqualTypeOf<Ms<'3.14m'>>();
    expectTypeOf(-188_400 as const).not.toEqualTypeOf<Ms<'3.14m'>>();

    expectTypeOf(-188_400 as const).toEqualTypeOf<Ms<'-3.14m'>>();
    expectTypeOf(188_400 as const).not.toEqualTypeOf<Ms<'-3.14m'>>();

    expectTypeOf(188_400 as const).toEqualTypeOf<Ms<'3.14 m'>>();
    expectTypeOf(-188_400 as const).toEqualTypeOf<Ms<'-3.14   minutes'>>();

    expectTypeOf(30_000 as const).toEqualTypeOf<Ms<'0.5m'>>();
    expectTypeOf(30_000 as const).toEqualTypeOf<Ms<'.5m'>>();
    expectTypeOf(-30_000 as const).toEqualTypeOf<Ms<'-0.5m'>>();
    expectTypeOf(-30_000 as const).toEqualTypeOf<Ms<'-.5m'>>();
    expectTypeOf(90_000 as const).toEqualTypeOf<Ms<'01.50m'>>();
    expectTypeOf(60_000 as const).toEqualTypeOf<Ms<'1.0m'>>();
  });

  it('unit aliases', () => {
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 m'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 min'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 mins'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 minute'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 minutes'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234   minutes'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'   1234   minutes   '>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 Min'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 Minutes'>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<'m'>>().toBeNever();
    expectTypeOf<Ms<'--m'>>().toBeNever();
    expectTypeOf<Ms<'--42m'>>().toBeNever();
    expectTypeOf(2_520_000 as const).not.toEqualTypeOf<Ms<'42ms'>>();
    expectTypeOf<Ms<'4 2m'>>().toBeNever();
    expectTypeOf<Ms<'4-2m'>>().toBeNever();
    expectTypeOf<Ms<'42 -m'>>().toBeNever();
    expectTypeOf<Ms<'1.m'>>().toBeNever();
    expectTypeOf<Ms<'.m'>>().toBeNever();
  });
});

describe('hours', () => {
  it('zero', () => {
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'0h'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'0h'>>();

    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-0h'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-000h'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-0h'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-000h'>>();
  });

  it('integer', () => {
    expectTypeOf(3_600_000 as const).toEqualTypeOf<Ms<'1h'>>();
    expectTypeOf(-3_600_000 as const).not.toEqualTypeOf<Ms<'1h'>>();

    expectTypeOf(3_600_000 as const).toEqualTypeOf<Ms<'001h'>>();
    expectTypeOf(-3_600_000 as const).not.toEqualTypeOf<Ms<'001h'>>();

    expectTypeOf(151_200_000 as const).toEqualTypeOf<Ms<'42h'>>();
    expectTypeOf(-151_200_000 as const).not.toEqualTypeOf<Ms<'42h'>>();
  });

  it('negative integer', () => {
    expectTypeOf(-3_600_000 as const).toEqualTypeOf<Ms<'-001h'>>();
    expectTypeOf(3_600_000 as const).not.toEqualTypeOf<Ms<'-001h'>>();

    expectTypeOf(-151_200_000 as const).toEqualTypeOf<Ms<'-42h'>>();
    expectTypeOf(151_200_000 as const).not.toEqualTypeOf<Ms<'-42h'>>();
  });

  it('float', () => {
    expectTypeOf(11_304_000 as const).toEqualTypeOf<Ms<'3.14h'>>();
    expectTypeOf(-11_304_000 as const).not.toEqualTypeOf<Ms<'3.14h'>>();

    expectTypeOf(-11_304_000 as const).toEqualTypeOf<Ms<'-3.14h'>>();
    expectTypeOf(11_304_000 as const).not.toEqualTypeOf<Ms<'-3.14h'>>();

    expectTypeOf(5_400_000 as const).toEqualTypeOf<Ms<'1.5 hours'>>();
    expectTypeOf(11_304_000 as const).toEqualTypeOf<Ms<'3.14 h'>>();
    expectTypeOf(-11_304_000 as const).toEqualTypeOf<Ms<'-3.14   hours'>>();

    expectTypeOf(1_800_000 as const).toEqualTypeOf<Ms<'0.5h'>>();
    expectTypeOf(1_800_000 as const).toEqualTypeOf<Ms<'.5h'>>();
    expectTypeOf(-1_800_000 as const).toEqualTypeOf<Ms<'-0.5h'>>();
    expectTypeOf(-1_800_000 as const).toEqualTypeOf<Ms<'-.5h'>>();
    expectTypeOf(5_400_000 as const).toEqualTypeOf<Ms<'01.50h'>>();
    expectTypeOf(3_600_000 as const).toEqualTypeOf<Ms<'1.0h'>>();
  });

  it('unit aliases', () => {
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 h'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 hr'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 hrs'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 hour'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 hours'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234   hours'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'   1234   hours   '>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 Hr'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 Hours'>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<'h'>>().toBeNever();
    expectTypeOf<Ms<'--h'>>().toBeNever();
    expectTypeOf<Ms<'--42h'>>().toBeNever();
    expectTypeOf<Ms<'42hs'>>().toBeNever();
    expectTypeOf<Ms<'3. 14h'>>().toBeNever();
    expectTypeOf<Ms<'4 2h'>>().toBeNever();
    expectTypeOf<Ms<'4-2h'>>().toBeNever();
    expectTypeOf<Ms<'42 -h'>>().toBeNever();
    expectTypeOf<Ms<'1 .5h'>>().toBeNever();
    expectTypeOf<Ms<'1.h'>>().toBeNever();
    expectTypeOf<Ms<'.h'>>().toBeNever();
  });
});

describe('days', () => {
  it('zero', () => {
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'0d'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'0d'>>();

    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-0d'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-000d'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-0d'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-000d'>>();
  });

  it('integer', () => {
    expectTypeOf(86_400_000 as const).toEqualTypeOf<Ms<'1d'>>();
    expectTypeOf(-86_400_000 as const).not.toEqualTypeOf<Ms<'1d'>>();

    expectTypeOf(86_400_000 as const).toEqualTypeOf<Ms<'001d'>>();
    expectTypeOf(-86_400_000 as const).not.toEqualTypeOf<Ms<'001d'>>();

    expectTypeOf(3_628_800_000 as const).toEqualTypeOf<Ms<'42d'>>();
    expectTypeOf(-3_628_800_000 as const).not.toEqualTypeOf<Ms<'42d'>>();
  });

  it('negative integer', () => {
    expectTypeOf(-86_400_000 as const).toEqualTypeOf<Ms<'-001d'>>();
    expectTypeOf(86_400_000 as const).not.toEqualTypeOf<Ms<'-001d'>>();

    expectTypeOf(-3_628_800_000 as const).toEqualTypeOf<Ms<'-42d'>>();
    expectTypeOf(3_628_800_000 as const).not.toEqualTypeOf<Ms<'-42d'>>();
  });

  it('float', () => {
    expectTypeOf(271_296_000 as const).toEqualTypeOf<Ms<'3.14d'>>();
    expectTypeOf(-271_296_000 as const).not.toEqualTypeOf<Ms<'3.14d'>>();

    expectTypeOf(-271_296_000 as const).toEqualTypeOf<Ms<'-3.14d'>>();
    expectTypeOf(271_296_000 as const).not.toEqualTypeOf<Ms<'-3.14d'>>();

    expectTypeOf(271_296_000 as const).toEqualTypeOf<Ms<'3.14 d'>>();
    expectTypeOf(-271_296_000 as const).toEqualTypeOf<Ms<'-3.14   days'>>();

    expectTypeOf(43_200_000 as const).toEqualTypeOf<Ms<'0.5d'>>();
    expectTypeOf(43_200_000 as const).toEqualTypeOf<Ms<'.5d'>>();
    expectTypeOf(-43_200_000 as const).toEqualTypeOf<Ms<'-0.5d'>>();
    expectTypeOf(-43_200_000 as const).toEqualTypeOf<Ms<'-.5d'>>();
    expectTypeOf(129_600_000 as const).toEqualTypeOf<Ms<'01.50d'>>();
    expectTypeOf(86_400_000 as const).toEqualTypeOf<Ms<'1.0d'>>();
  });

  it('unit aliases', () => {
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234 d'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234 day'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234 days'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234   days'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'   1234   days   '>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234 Day'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234 Days'>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<'d'>>().toBeNever();
    expectTypeOf<Ms<'--d'>>().toBeNever();
    expectTypeOf<Ms<'--42d'>>().toBeNever();
    expectTypeOf<Ms<'42ds'>>().toBeNever();
    expectTypeOf<Ms<'4 2d'>>().toBeNever();
    expectTypeOf<Ms<'4-2d'>>().toBeNever();
    expectTypeOf<Ms<'42 -d'>>().toBeNever();
    expectTypeOf<Ms<'1.d'>>().toBeNever();
    expectTypeOf<Ms<'.d'>>().toBeNever();
  });
});

describe('weeks', () => {
  it('zero', () => {
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'0w'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'0w'>>();

    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-0w'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-000w'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-0w'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-000w'>>();
  });

  it('integer', () => {
    expectTypeOf(604_800_000 as const).toEqualTypeOf<Ms<'1w'>>();
    expectTypeOf(-604_800_000 as const).not.toEqualTypeOf<Ms<'1w'>>();

    expectTypeOf(604_800_000 as const).toEqualTypeOf<Ms<'001w'>>();
    expectTypeOf(-604_800_000 as const).not.toEqualTypeOf<Ms<'001w'>>();

    expectTypeOf(25_401_600_000 as const).toEqualTypeOf<Ms<'42w'>>();
    expectTypeOf(-25_401_600_000 as const).not.toEqualTypeOf<Ms<'42w'>>();
  });

  it('negative integer', () => {
    expectTypeOf(-604_800_000 as const).toEqualTypeOf<Ms<'-001w'>>();
    expectTypeOf(604_800_000 as const).not.toEqualTypeOf<Ms<'-001w'>>();

    expectTypeOf(-25_401_600_000 as const).toEqualTypeOf<Ms<'-42w'>>();
    expectTypeOf(25_401_600_000 as const).not.toEqualTypeOf<Ms<'-42w'>>();
  });

  it('float', () => {
    expectTypeOf(1_899_072_000 as const).toEqualTypeOf<Ms<'3.14w'>>();
    expectTypeOf(-1_899_072_000 as const).not.toEqualTypeOf<Ms<'3.14w'>>();

    expectTypeOf(-1_899_072_000 as const).toEqualTypeOf<Ms<'-3.14w'>>();
    expectTypeOf(1_899_072_000 as const).not.toEqualTypeOf<Ms<'-3.14w'>>();

    expectTypeOf(1_899_072_000 as const).toEqualTypeOf<Ms<'3.14 w'>>();
    expectTypeOf(-1_899_072_000 as const).toEqualTypeOf<Ms<'-3.14   weeks'>>();

    expectTypeOf(302_400_000 as const).toEqualTypeOf<Ms<'0.5w'>>();
    expectTypeOf(302_400_000 as const).toEqualTypeOf<Ms<'.5w'>>();
    expectTypeOf(-302_400_000 as const).toEqualTypeOf<Ms<'-0.5w'>>();
    expectTypeOf(-302_400_000 as const).toEqualTypeOf<Ms<'-.5w'>>();
    expectTypeOf(907_200_000 as const).toEqualTypeOf<Ms<'01.50w'>>();
    expectTypeOf(604_800_000 as const).toEqualTypeOf<Ms<'1.0w'>>();
  });

  it('unit aliases', () => {
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234 w'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234 week'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234 weeks'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234   weeks'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'   1234   weeks   '>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234 Week'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234 Weeks'>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<'w'>>().toBeNever();
    expectTypeOf<Ms<'--w'>>().toBeNever();
    expectTypeOf<Ms<'--42w'>>().toBeNever();
    expectTypeOf<Ms<'42ws'>>().toBeNever();
    expectTypeOf<Ms<'4 2w'>>().toBeNever();
    expectTypeOf<Ms<'4-2w'>>().toBeNever();
    expectTypeOf<Ms<'42 -w'>>().toBeNever();
    expectTypeOf<Ms<'1.w'>>().toBeNever();
    expectTypeOf<Ms<'.w'>>().toBeNever();
  });
});

describe('years', () => {
  it('zero', () => {
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'0y'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'0y'>>();

    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-0y'>>();
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'-000y'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-0y'>>();
    expectTypeOf(1 as const).not.toEqualTypeOf<Ms<'-000y'>>();
  });

  it('integer', () => {
    expectTypeOf(31_557_600_000 as const).toEqualTypeOf<Ms<'1y'>>();
    expectTypeOf(-31_557_600_000 as const).not.toEqualTypeOf<Ms<'1y'>>();

    expectTypeOf(31_557_600_000 as const).toEqualTypeOf<Ms<'001y'>>();
    expectTypeOf(-31_557_600_000 as const).not.toEqualTypeOf<Ms<'001y'>>();

    expectTypeOf(1_325_419_200_000 as const).toEqualTypeOf<Ms<'42y'>>();
    expectTypeOf(-1_325_419_200_000 as const).not.toEqualTypeOf<Ms<'42y'>>();
  });

  it('negative integer', () => {
    expectTypeOf(-31_557_600_000 as const).toEqualTypeOf<Ms<'-001y'>>();
    expectTypeOf(31_557_600_000 as const).not.toEqualTypeOf<Ms<'-001y'>>();

    expectTypeOf(-1_325_419_200_000 as const).toEqualTypeOf<Ms<'-42y'>>();
    expectTypeOf(1_325_419_200_000 as const).not.toEqualTypeOf<Ms<'-42y'>>();
  });

  it('float', () => {
    expectTypeOf(99_090_864_000 as const).toEqualTypeOf<Ms<'3.14y'>>();
    expectTypeOf(-99_090_864_000 as const).not.toEqualTypeOf<Ms<'3.14y'>>();

    expectTypeOf(-99_090_864_000 as const).toEqualTypeOf<Ms<'-3.14y'>>();
    expectTypeOf(99_090_864_000 as const).not.toEqualTypeOf<Ms<'-3.14y'>>();

    expectTypeOf(99_090_864_000 as const).toEqualTypeOf<Ms<'3.14 y'>>();
    expectTypeOf(-99_090_864_000 as const).toEqualTypeOf<Ms<'-3.14   years'>>();

    expectTypeOf(15_778_800_000 as const).toEqualTypeOf<Ms<'0.5y'>>();
    expectTypeOf(15_778_800_000 as const).toEqualTypeOf<Ms<'.5y'>>();
    expectTypeOf(-15_778_800_000 as const).toEqualTypeOf<Ms<'-0.5y'>>();
    expectTypeOf(-15_778_800_000 as const).toEqualTypeOf<Ms<'-.5y'>>();
    expectTypeOf(47_336_400_000 as const).toEqualTypeOf<Ms<'01.50y'>>();
    expectTypeOf(31_557_600_000 as const).toEqualTypeOf<Ms<'1.0y'>>();
  });

  it('unit aliases', () => {
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 y'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 yr'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 yrs'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 year'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 years'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234   years'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'   1234   years   '>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 Yr'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 Years'>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<'y'>>().toBeNever();
    expectTypeOf<Ms<'--y'>>().toBeNever();
    expectTypeOf<Ms<'--42y'>>().toBeNever();
    expectTypeOf<Ms<'42ys'>>().toBeNever();
    expectTypeOf<Ms<'4 2y'>>().toBeNever();
    expectTypeOf<Ms<'4-2y'>>().toBeNever();
    expectTypeOf<Ms<'42 -y'>>().toBeNever();
    expectTypeOf<Ms<'1.y'>>().toBeNever();
    expectTypeOf<Ms<'.y'>>().toBeNever();
  });
});

describe('no unit', () => {
  it('means milliseconds', () => {
    expectTypeOf(0 as const).toEqualTypeOf<Ms<'0'>>();
    expectTypeOf(42 as const).toEqualTypeOf<Ms<'42'>>();
    expectTypeOf(-42 as const).toEqualTypeOf<Ms<'-42'>>();
    expectTypeOf(1.5 as const).toEqualTypeOf<Ms<'1.5'>>();
    expectTypeOf(0.5 as const).toEqualTypeOf<Ms<'.5'>>();
    expectTypeOf(10 as const).toEqualTypeOf<Ms<'  010  '>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<''>>().toBeNever();
    expectTypeOf<Ms<' '>>().toBeNever();
    expectTypeOf<Ms<'-'>>().toBeNever();
    expectTypeOf<Ms<'.'>>().toBeNever();
    expectTypeOf<Ms<'1.'>>().toBeNever();
  });
});

describe('whitespace', () => {
  it('any whitespace works like a space', () => {
    expectTypeOf(42 as const).toEqualTypeOf<Ms<'\t42ms\n'>>();
    expectTypeOf(-42 as const).toEqualTypeOf<Ms<'-\t42ms'>>();
    expectTypeOf(42 as const).toEqualTypeOf<Ms<'42\tms'>>();
    expectTypeOf(1.5 as const).toEqualTypeOf<Ms<'1.5\tms'>>();
  });

  it('invalid', () => {
    expectTypeOf<Ms<'4\t2ms'>>().toBeNever();
    expectTypeOf<Ms<'1.\t5ms'>>().toBeNever();
  });
});

describe('unions', () => {
  it('parses each string on its own', () => {
    expectTypeOf<1000 | 7_200_000>().toEqualTypeOf<Ms<'1s' | '2h'>>();
    expectTypeOf<1000>().toEqualTypeOf<Ms<'1s' | '1mss'>>();
  });
});

describe('non-literal strings', () => {
  it('resolve to never', () => {
    expectTypeOf<Ms<string>>().toBeNever();
  });
});

describe('ms function', () => {
  it('accepts the same strings as `Ms`', () => {
    expectTypeOf(ms<'1s'>).toEqualTypeOf<(milliseconds: 1000) => 1000>();
    expectTypeOf(ms<'1s '>).toEqualTypeOf<(milliseconds: 1000) => 1000>();
    expectTypeOf(ms<'- 1s'>).toEqualTypeOf<(milliseconds: -1000) => -1000>();
    expectTypeOf(ms<'1 Sec'>).toEqualTypeOf<(milliseconds: 1000) => 1000>();
    expectTypeOf(ms<'100'>).toEqualTypeOf<(milliseconds: 100) => 100>();
    expectTypeOf(ms<'1mss'>).toEqualTypeOf<(milliseconds: never) => never>();
  });

  it('requires the time string', () => {
    // @ts-expect-error The time string is missing
    ms(1000);
  });
});
