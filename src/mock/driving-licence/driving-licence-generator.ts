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
    // 只有 18 歲以上成年人才可以領取駕照
    if (applicant.getAge() < 17) {
      this.logger.warn(`Under age application user: ${applicant.getId()}`);
      throw new InvalidDriverException('Applicant is too young');
    }

    // 一個人只能領取一次駕照
    if (applicant.holdsLicence()) {
      this.logger.warn(`duplicate application user: ${applicant.getId()}`);
      throw new InvalidDriverException('Cannot hold more than one licence');
    }

    // 名字的起首字母+MMDDYYYY => a
    const licence = applicant.getInitials() + dayjs(applicant.getDateOfBirth()).format('MMDDYYYY');

    // 15 減去 a 的長度為 b 的長度
    let numberOfDigits: number = 15 - licence.length;
    // 但是 b 的長度最少會有 4 個字
    numberOfDigits = (numberOfDigits < 4) ? 4 : numberOfDigits;

    // 格式為 a + b
    return `${licence}${this.randomNumbersGenerator.generate(numberOfDigits)}`;
  }
}
