import {expectType, expectNotType} from 'tsd';
import type {Ms} from '../src/ms';

/****************/
/* MILLISECONDS */
/****************/

expectType<Ms<'0ms'>>(0);
expectNotType<Ms<'0ms'>>(1);

expectType<Ms<'1ms'>>(1);
expectNotType<Ms<'1ms'>>(10);

expectType<Ms<'3.14ms'>>(3.14);
expectNotType<Ms<'3.14ms'>>(4);
expectNotType<Ms<'3.14ms'>>(3);

expectType<Ms<'42ms'>>(42);
expectNotType<Ms<'42ms'>>(41);

expectType<Ms<'-42ms'>>(-42);
expectNotType<Ms<'-42ms'>>(42);

expectType<Ms<'- 42ms'>>(-42);
expectNotType<Ms<'- 42ms'>>(42);

expectType<Ms<'-   42ms'>>(-42);
expectNotType<Ms<'-   42ms'>>(42);

expectType<Ms<'1234msec'>>(1234);
expectType<Ms<'1234msecs'>>(1234);
expectType<Ms<'1234millisecond'>>(1234);
expectType<Ms<'1234milliseconds'>>(1234);
expectType<Ms<'1234 msec'>>(1234);
expectType<Ms<'1234 msecs'>>(1234);
expectType<Ms<'1234 millisecond'>>(1234);
expectType<Ms<'1234 milliseconds'>>(1234);
expectType<Ms<'1234   msec'>>(1234);
expectType<Ms<'1234   msecs'>>(1234);
expectType<Ms<'1234   millisecond'>>(1234);
expectType<Ms<'1234   milliseconds'>>(1234);

// Trimming (including leading zeroes)
expectType<Ms<'-01ms'>>(-1);
expectType<Ms<'-0ms'>>(0);
expectType<Ms<'-00ms'>>(0);
expectType<Ms<'-000ms'>>(0);
expectType<Ms<' -000ms'>>(0);
expectType<Ms<'  010ms'>>(10);
expectType<Ms<'  -010ms'>>(-10);
expectType<Ms<'-01ms '>>(-1);
expectType<Ms<'-0ms '>>(0);
expectType<Ms<'-00ms '>>(0);
expectType<Ms<'-000ms '>>(0);
expectType<Ms<' -000ms  '>>(0);
expectType<Ms<'  010ms  '>>(10);
expectType<Ms<'  -010ms  '>>(-10);

// Invalid
expectNotType<Ms<'ms'>>(0);
expectNotType<Ms<'--ms'>>(0);
expectNotType<Ms<'--42ms'>>(-42);
expectNotType<Ms<'42mss'>>(42);

/***********/
/* SECONDS */
/***********/

expectType<Ms<'0s'>>(0);
expectNotType<Ms<'0s'>>(1);

expectType<Ms<'-0s'>>(0);
expectType<Ms<'-000s'>>(0);
expectNotType<Ms<'-0s'>>(1);
expectNotType<Ms<'-000s'>>(1);

expectType<Ms<'1s'>>(1000);
expectNotType<Ms<'1s'>>(2000);

expectType<Ms<'001s'>>(1000);
expectNotType<Ms<'001s'>>(-1000);

expectType<Ms<'-001s'>>(-1000);
expectNotType<Ms<'-001s'>>(1000);

expectType<Ms<'3.14s'>>(3140);
expectNotType<Ms<'3.14s'>>(-3140);

expectType<Ms<'-3.14s'>>(-3140);
expectNotType<Ms<'-3.14s'>>(3140);

expectType<Ms<'42s'>>(42_000);
expectNotType<Ms<'42s'>>(-42_000);

expectType<Ms<'-42s'>>(-42_000);
expectNotType<Ms<'-42s'>>(42_000);

expectType<Ms<'1234 s'>>(1_234_000);
expectType<Ms<'1234 sec'>>(1_234_000);
expectType<Ms<'1234 secs'>>(1_234_000);
expectType<Ms<'1234 second'>>(1_234_000);
expectType<Ms<'1234 seconds'>>(1_234_000);
expectType<Ms<'1234   seconds'>>(1_234_000);
expectType<Ms<'   1234   seconds   '>>(1_234_000);

// Invalid
expectNotType<Ms<'s'>>(0);
expectNotType<Ms<'--s'>>(0);
expectNotType<Ms<'--42s'>>(-42_000);
expectNotType<Ms<'42ss'>>(42_000);

/***********/
/* MINUTES */
/***********/

expectType<Ms<'0m'>>(0);
expectNotType<Ms<'0m'>>(1);

expectType<Ms<'-0m'>>(0);
expectType<Ms<'-000m'>>(0);
expectNotType<Ms<'-0m'>>(1);
expectNotType<Ms<'-000m'>>(1);

expectType<Ms<'1m'>>(60_000);
expectNotType<Ms<'1m'>>(-60_000);

expectType<Ms<'001m'>>(60_000);
expectNotType<Ms<'001m'>>(-60_000);

expectType<Ms<'-001m'>>(-60_000);
expectNotType<Ms<'-001m'>>(60_000);

expectType<Ms<'3.14m'>>(188_400);
expectNotType<Ms<'3.14m'>>(-188_400);

expectType<Ms<'-3.14m'>>(-188_400);
expectNotType<Ms<'-3.14m'>>(188_400);

expectType<Ms<'42m'>>(2_520_000);
expectNotType<Ms<'42m'>>(-2_520_000);

expectType<Ms<'-42m'>>(-2_520_000);
expectNotType<Ms<'-42m'>>(2_520_000);

expectType<Ms<'1234 m'>>(74_040_000);
expectType<Ms<'1234 min'>>(74_040_000);
expectType<Ms<'1234 mins'>>(74_040_000);
expectType<Ms<'1234 minute'>>(74_040_000);
expectType<Ms<'1234 minutes'>>(74_040_000);
expectType<Ms<'1234   minutes'>>(74_040_000);
expectType<Ms<'   1234   minutes   '>>(74_040_000);

// Invalid
expectNotType<Ms<'m'>>(0);
expectNotType<Ms<'--m'>>(0);
expectNotType<Ms<'--42m'>>(-2_520_000);
expectNotType<Ms<'42ms'>>(2_520_000);

/*********/
/* HOURS */
/*********/

expectType<Ms<'0h'>>(0);
expectNotType<Ms<'0h'>>(1);

expectType<Ms<'-0h'>>(0);
expectType<Ms<'-000h'>>(0);
expectNotType<Ms<'-0h'>>(1);
expectNotType<Ms<'-000h'>>(1);

expectType<Ms<'1h'>>(3_600_000);
expectNotType<Ms<'1h'>>(-3_600_000);

expectType<Ms<'001h'>>(3_600_000);
expectNotType<Ms<'001h'>>(-3_600_000);

expectType<Ms<'-001h'>>(-3_600_000);
expectNotType<Ms<'-001h'>>(3_600_000);

expectType<Ms<'3.14h'>>(11_304_000);
expectNotType<Ms<'3.14h'>>(-11_304_000);

expectType<Ms<'-3.14h'>>(-11_304_000);
expectNotType<Ms<'-3.14h'>>(11_304_000);

expectType<Ms<'42h'>>(151_200_000);
expectNotType<Ms<'42h'>>(-151_200_000);

expectType<Ms<'-42h'>>(-151_200_000);
expectNotType<Ms<'-42h'>>(151_200_000);

expectType<Ms<'1234 h'>>(4_442_400_000);
expectType<Ms<'1234 hr'>>(4_442_400_000);
expectType<Ms<'1234 hrs'>>(4_442_400_000);
expectType<Ms<'1234 hour'>>(4_442_400_000);
expectType<Ms<'1234 hours'>>(4_442_400_000);
expectType<Ms<'1234   hours'>>(4_442_400_000);
expectType<Ms<'   1234   hours   '>>(4_442_400_000);

// Invalid
expectNotType<Ms<'h'>>(0);
expectNotType<Ms<'--h'>>(0);
expectNotType<Ms<'--42h'>>(-151_200_000);
expectNotType<Ms<'42hs'>>(151_200_000);

/********/
/* DAYS */
/********/

expectType<Ms<'0d'>>(0);
expectNotType<Ms<'0d'>>(1);

expectType<Ms<'-0d'>>(0);
expectType<Ms<'-000d'>>(0);
expectNotType<Ms<'-0d'>>(1);
expectNotType<Ms<'-000d'>>(1);

expectType<Ms<'1d'>>(86_400_000);
expectNotType<Ms<'1d'>>(-86_400_000);

expectType<Ms<'001d'>>(86_400_000);
expectNotType<Ms<'001d'>>(-86_400_000);

expectType<Ms<'-001d'>>(-86_400_000);
expectNotType<Ms<'-001d'>>(86_400_000);

expectType<Ms<'3.14d'>>(271_296_000);
expectNotType<Ms<'3.14d'>>(-271_296_000);

expectType<Ms<'-3.14d'>>(-271_296_000);
expectNotType<Ms<'-3.14d'>>(271_296_000);

expectType<Ms<'42d'>>(3_628_800_000);
expectNotType<Ms<'42d'>>(-3_628_800_000);

expectType<Ms<'-42d'>>(-3_628_800_000);
expectNotType<Ms<'-42d'>>(3_628_800_000);

expectType<Ms<'1234 d'>>(106_617_600_000);
expectType<Ms<'1234 day'>>(106_617_600_000);
expectType<Ms<'1234 days'>>(106_617_600_000);
expectType<Ms<'1234   days'>>(106_617_600_000);
expectType<Ms<'   1234   days   '>>(106_617_600_000);

// Invalid
expectNotType<Ms<'d'>>(0);
expectNotType<Ms<'--d'>>(0);
expectNotType<Ms<'--42d'>>(-3_628_800_000);
expectNotType<Ms<'42ds'>>(3_628_800_000);

/*********/
/* WEEKS */
/*********/

expectType<Ms<'0w'>>(0);
expectNotType<Ms<'0w'>>(1);

expectType<Ms<'-0w'>>(0);
expectType<Ms<'-000w'>>(0);
expectNotType<Ms<'-0w'>>(1);
expectNotType<Ms<'-000w'>>(1);

expectType<Ms<'1w'>>(604_800_000);
expectNotType<Ms<'1w'>>(-604_800_000);

expectType<Ms<'001w'>>(604_800_000);
expectNotType<Ms<'001w'>>(-604_800_000);

expectType<Ms<'-001w'>>(-604_800_000);
expectNotType<Ms<'-001w'>>(604_800_000);

expectType<Ms<'3.14w'>>(1_899_072_000);
expectNotType<Ms<'3.14w'>>(-1_899_072_000);

expectType<Ms<'-3.14w'>>(-1_899_072_000);
expectNotType<Ms<'-3.14w'>>(1_899_072_000);

expectType<Ms<'42w'>>(25_401_600_000);
expectNotType<Ms<'42w'>>(-25_401_600_000);

expectType<Ms<'-42w'>>(-25_401_600_000);
expectNotType<Ms<'-42w'>>(25_401_600_000);

expectType<Ms<'1234 w'>>(746_323_200_000);
expectType<Ms<'1234 week'>>(746_323_200_000);
expectType<Ms<'1234 weeks'>>(746_323_200_000);
expectType<Ms<'1234   weeks'>>(746_323_200_000);
expectType<Ms<'   1234   weeks   '>>(746_323_200_000);

// Invalid
expectNotType<Ms<'w'>>(0);
expectNotType<Ms<'--w'>>(0);
expectNotType<Ms<'--42w'>>(-25_401_600_000);
expectNotType<Ms<'42ws'>>(25_401_600_000);

/*********/
/* YEARS */
/*********/

expectType<Ms<'0y'>>(0);
expectNotType<Ms<'0y'>>(1);

expectType<Ms<'-0y'>>(0);
expectType<Ms<'-000y'>>(0);
expectNotType<Ms<'-0y'>>(1);
expectNotType<Ms<'-000y'>>(1);

expectType<Ms<'1y'>>(31_557_600_000);
expectNotType<Ms<'1y'>>(-31_557_600_000);

expectType<Ms<'001y'>>(31_557_600_000);
expectNotType<Ms<'001y'>>(-31_557_600_000);

expectType<Ms<'-001y'>>(-31_557_600_000);
expectNotType<Ms<'-001y'>>(31_557_600_000);

expectType<Ms<'3.14y'>>(99_090_864_000);
expectNotType<Ms<'3.14y'>>(-99_090_864_000);

expectType<Ms<'-3.14y'>>(-99_090_864_000);
expectNotType<Ms<'-3.14y'>>(99_090_864_000);

expectType<Ms<'42y'>>(1_325_419_200_000);
expectNotType<Ms<'42y'>>(-1_325_419_200_000);

expectType<Ms<'-42y'>>(-1_325_419_200_000);
expectNotType<Ms<'-42y'>>(1_325_419_200_000);

expectType<Ms<'1234 y'>>(38_942_078_400_000);
expectType<Ms<'1234 yr'>>(38_942_078_400_000);
expectType<Ms<'1234 yrs'>>(38_942_078_400_000);
expectType<Ms<'1234 year'>>(38_942_078_400_000);
expectType<Ms<'1234 years'>>(38_942_078_400_000);
expectType<Ms<'1234   years'>>(38_942_078_400_000);
expectType<Ms<'   1234   years   '>>(38_942_078_400_000);

// Invalid
expectNotType<Ms<'y'>>(0);
expectNotType<Ms<'--y'>>(0);
expectNotType<Ms<'--42y'>>(-1_325_419_200_000);
expectNotType<Ms<'42ys'>>(1_325_419_200_000);
