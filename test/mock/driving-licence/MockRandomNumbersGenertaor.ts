import { IRandomNumberGenerator } from '../../../src/mock/driving-licence/IRandomNumberGenerator';

export class MockRandomNumbersGenerator implements IRandomNumberGenerator {

  private responses: Map<number, string>;

  public mockGenerate(callAndResponse: Map<number, string>): void {
    this.responses = callAndResponse;
  }

  public generate(numberOfDigits: number): string {
    return this.responses.get(numberOfDigits);
  }
}
