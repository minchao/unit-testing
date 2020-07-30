import { DrivingLicenceGenerator } from '../../../../src/mock/driving-licence/driving-licence-generator';
import { ILicenceApplicant } from '../../../../src/mock/driving-licence/licence-applicant';

import { MockRandomNumbersGenerator } from './mock-random-numbers-generator';
import { SpyLogger } from './spy-logger';
import { ValidApplicant } from './valid-applicant';

xdescribe('Driving Licence', () => {
  let logger: SpyLogger;
  let random: MockRandomNumbersGenerator;
  let generator: DrivingLicenceGenerator;

  beforeEach(() => {
    logger = new SpyLogger();
    random = new MockRandomNumbersGenerator();
    generator = new DrivingLicenceGenerator(logger, random);
  });

  it('駕照號碼至少需要 15 個字元', () => {
    const applicant1: ILicenceApplicant = new ValidApplicant('M'); // 15-1-8=6
    const applicant2: ILicenceApplicant = new ValidApplicant('MD'); // 15-2-8=5
    const applicant3: ILicenceApplicant = new ValidApplicant('MDBF'); // 15-4-8=3, because 3 < 4, therefore 3+1=4
    const randomMap: Map<number, string> = new Map<number, string>();

    // fill the missing code

    expect('M11071999012345').toEqual(generator.generateNumber(applicant1));
    expect('MD1107199901234').toEqual(generator.generateNumber(applicant2));
    expect('MDBF110719990123').toEqual(generator.generateNumber(applicant3));
  });
});
