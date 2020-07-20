import { isStringLong } from '../../src/coverage/coverage';

describe('Code Coverage', () => {
  it('Test', function () {
    const result = isStringLong('abc');

    expect(result).toBe(false);
  });
});
