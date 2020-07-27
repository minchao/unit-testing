import { IRandomNumberGenerator } from '../../../../src/mock/driving-licence/random-number-generator';

export class MockRandomNumbersGenerator implements IRandomNumberGenerator {
  public generate(numberOfDigits: number): string | undefined {
    return '';
  }
}
