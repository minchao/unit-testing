import dayjs from 'dayjs';
import { ILicenceApplicant } from './ILicenceApplicant';
import { ILogger } from './ILogger';
import { InvalidDriverException } from './InvalidDriverException';
import { IRandomNumberGenerator } from './IRandomNumberGenerator';

class DrivingLicenceGenerator {
  private logger: ILogger;
  private randomNumbersGenerator: IRandomNumberGenerator;

  public DrivingLicenceGenerator(
    logger: ILogger,
    randomNumbersGenerator: IRandomNumberGenerator,
  ) {
    this.logger = logger;
    this.randomNumbersGenerator = randomNumbersGenerator;
  }

  public generateNumber(applicant: ILicenceApplicant): string {
    if (applicant.getAge() < 17) {
      this.logger.warn(`Under age application user: ${applicant.getId()}`);
      throw new InvalidDriverException("Applicant is too young");
    }

    if (applicant.holdsLicence()) {
      this.logger.warn(`duplicate application user: ${applicant.getId()}`);
      throw new InvalidDriverException("Cannot hold more than one licence");
    }

    const licence = applicant.getInitials() + dayjs(applicant.getDateOfBirth()).format('DDMMYYYY');

    let numberOfDigits: number = 15 - licence.length;
    numberOfDigits = (numberOfDigits < 4) ? 4 : numberOfDigits;

    return `licence . ${this.randomNumbersGenerator.generate(numberOfDigits)}`;
  }
}
