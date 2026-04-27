/* eslint-disable un/no-multiple-consecutive-spaces */
import type {Ms} from '../src/ms';

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
    expectTypeOf(3.14 as const).toEqualTypeOf<Ms<'3.14ms'>>();
    expectTypeOf(4 as const).not.toEqualTypeOf<Ms<'3.14ms'>>();
    expectTypeOf(3 as const).not.toEqualTypeOf<Ms<'3.14ms'>>();
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
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'ms'>>();
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'--ms'>>();
    expectTypeOf(-42 as const).not.toEqualTypeOf<Ms<'--42ms'>>();
    expectTypeOf(42 as const).not.toEqualTypeOf<Ms<'42mss'>>();
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
  });

  it('unit aliases', () => {
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 s'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 sec'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 secs'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 second'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234 seconds'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'1234   seconds'>>();
    expectTypeOf(1_234_000 as const).toEqualTypeOf<Ms<'   1234   seconds   '>>();
  });

  it('invalid', () => {
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'s'>>();
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'--s'>>();
    expectTypeOf(-42_000 as const).not.toEqualTypeOf<Ms<'--42s'>>();
    expectTypeOf(42_000 as const).not.toEqualTypeOf<Ms<'42ss'>>();
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
  });

  it('unit aliases', () => {
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 m'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 min'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 mins'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 minute'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234 minutes'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'1234   minutes'>>();
    expectTypeOf(74_040_000 as const).toEqualTypeOf<Ms<'   1234   minutes   '>>();
  });

  it('invalid', () => {
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'m'>>();
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'--m'>>();
    expectTypeOf(-2_520_000 as const).not.toEqualTypeOf<Ms<'--42m'>>();
    expectTypeOf(2_520_000 as const).not.toEqualTypeOf<Ms<'42ms'>>();
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
  });

  it('unit aliases', () => {
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 h'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 hr'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 hrs'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 hour'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234 hours'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'1234   hours'>>();
    expectTypeOf(4_442_400_000 as const).toEqualTypeOf<Ms<'   1234   hours   '>>();
  });

  it('invalid', () => {
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'h'>>();
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'--h'>>();
    expectTypeOf(-151_200_000 as const).not.toEqualTypeOf<Ms<'--42h'>>();
    expectTypeOf(151_200_000 as const).not.toEqualTypeOf<Ms<'42hs'>>();
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
  });

  it('unit aliases', () => {
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234 d'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234 day'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234 days'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'1234   days'>>();
    expectTypeOf(106_617_600_000 as const).toEqualTypeOf<Ms<'   1234   days   '>>();
  });

  it('invalid', () => {
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'d'>>();
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'--d'>>();
    expectTypeOf(-3_628_800_000 as const).not.toEqualTypeOf<Ms<'--42d'>>();
    expectTypeOf(3_628_800_000 as const).not.toEqualTypeOf<Ms<'42ds'>>();
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
  });

  it('unit aliases', () => {
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234 w'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234 week'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234 weeks'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'1234   weeks'>>();
    expectTypeOf(746_323_200_000 as const).toEqualTypeOf<Ms<'   1234   weeks   '>>();
  });

  it('invalid', () => {
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'w'>>();
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'--w'>>();
    expectTypeOf(-25_401_600_000 as const).not.toEqualTypeOf<Ms<'--42w'>>();
    expectTypeOf(25_401_600_000 as const).not.toEqualTypeOf<Ms<'42ws'>>();
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
  });

  it('unit aliases', () => {
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 y'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 yr'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 yrs'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 year'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234 years'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'1234   years'>>();
    expectTypeOf(38_942_078_400_000 as const).toEqualTypeOf<Ms<'   1234   years   '>>();
  });

  it('invalid', () => {
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'y'>>();
    expectTypeOf(0 as const).not.toEqualTypeOf<Ms<'--y'>>();
    expectTypeOf(-1_325_419_200_000 as const).not.toEqualTypeOf<Ms<'--42y'>>();
    expectTypeOf(1_325_419_200_000 as const).not.toEqualTypeOf<Ms<'42ys'>>();
  });
});
