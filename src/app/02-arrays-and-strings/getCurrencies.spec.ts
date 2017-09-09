import {getCurrencies} from './getCurrencies';

describe('Get Currency Suite', () => {
  it('should return the supported currencies', () => {
    const results = getCurrencies();
    expect(results).toContain('USD');
    expect(results).toContain('AUD');
    expect(results).toContain('EUR');
  });
});
