import { Calculator } from '../../src/first-unit-test/calculator';

describe('Calculator', () => {
  it('Sum of two numbers', () => {
    // Arrange
    const first = 10;
    const second = 20;
    const calculator = new Calculator();

    // Act
    const result = calculator.sum(first, second);

    // Assert
    expect(result).toEqual(30);
  });
});
