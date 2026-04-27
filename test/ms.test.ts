import {ms} from '../src/index';

describe('ms', () => {
  it('returns the passed milliseconds value unchanged', () => {
    expect(ms<'1s'>(1000)).toBe(1000);
  });
});
