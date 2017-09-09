import {compute} from './compute';

describe('compute test suite', () => {
  it('should increment the input for positive value', () => {
    expect(compute(10)).toBe(11);
  });

  it('should return zero for negative values', () => {
    const value = compute(-1);
    expect(value).toBe(0);
  });
});
