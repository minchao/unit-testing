import { isStringLong } from '../../src/coverage/branch/coverage';

describe('Branch Coverage with simplified if statement', () => {
  it('Test', function () {
    const result = isStringLong('abc');

    expect(result).toBe(false);
  });
});
