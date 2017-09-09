import {greet} from './greet';

describe('Greet Test Suite', () => {
  it('should greet user ', () => {
    const message = greet('Umamaheswararao Meka');
    expect(message).toBe('Welcome Umamaheswararao Meka');
    expect(message).toContain('Umamaheswararao');
  });
});
