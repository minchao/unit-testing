import dayjs from 'dayjs';
import { InvalidDriverException } from './invalid-driver-exception';
import { ILicenceApplicant } from './licence-applicant';
import { ILogger } from './logger';
import { IRandomNumberGenerator } from './random-number-generator';

export class DrivingLicenceGenerator {
  private logger: ILogger;
  private randomNumbersGenerator: IRandomNumberGenerator;

  public constructor(logger: ILogger, randomNumbersGenerator: IRandomNumberGenerator) {
    this.logger = logger;
    this.randomNumbersGenerator = randomNumbersGenerator;
  }

  public generateNumber(applicant: ILicenceApplicant): string {
    if (applicant.getAge() < 17) {
      this.logger.warn(`Under age application user: ${applicant.getId()}`);
      throw new InvalidDriverException('Applicant is too young');
    }

    if (applicant.holdsLicence()) {
      this.logger.warn(`duplicate application user: ${applicant.getId()}`);
      throw new InvalidDriverException('Cannot hold more than one licence');
    }

    const licence = applicant.getInitials() + dayjs(applicant.getDateOfBirth()).format('MMDDYYYY');

    let numberOfDigits: number = 15 - licence.length;
    numberOfDigits = (numberOfDigits < 4) ? 4 : numberOfDigits;

    return `${licence}${this.randomNumbersGenerator.generate(numberOfDigits)}`;
  }
}
