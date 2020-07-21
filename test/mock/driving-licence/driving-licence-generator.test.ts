import { DrivingLicenceGenerator } from '../../../src/mock/driving-licence/driving-licence-generator';
import { InvalidDriverException } from '../../../src/mock/driving-licence/invalid-driver-exception';
import { ILicenceApplicant } from '../../../src/mock/driving-licence/licence-applicant';
import { LicenceHolderApplicant } from './licence-holder-applicant';
import { MockRandomNumbersGenerator } from './mock-random-numbers-genertaor';
import { SpyLogger } from './spy-logger';
import { UnderAgeApplicant } from './under-age-applicant';
import { ValidApplicant } from './valid-applicant';

describe('Driving Licence', () => {
  let logger: SpyLogger;
  let random: MockRandomNumbersGenerator;
  let generator: DrivingLicenceGenerator;

  beforeEach(() => {
    logger = new SpyLogger();
    random = new MockRandomNumbersGenerator();

    generator = new DrivingLicenceGenerator(logger, random);
  });

  it('testUnderAgeApplicantCannotGenerateLicence', () => {
    const applicant: ILicenceApplicant = new UnderAgeApplicant();

    expect(() => { generator.generateNumber(applicant); }).toThrowError(InvalidDriverException);
    expect(() => { generator.generateNumber(applicant); }).toThrowError(/Applicant is too young/);
  });

  it('testUnderAgeApplicationsAreLogged', () => {
    const applicant: ILicenceApplicant = new UnderAgeApplicant();

    try {
      generator.generateNumber(applicant);
    } catch (error) {
    }

    expect(1).toEqual(logger.warnCalledCount);
    expect('Under age application user: 123').toEqual(logger.warnLastMessage);
  });

  it('testLicenceHolderCannotGenerateLicence', () => {
    const applicant: ILicenceApplicant = new LicenceHolderApplicant();

    expect(() => { generator.generateNumber(applicant); }).toThrowError(InvalidDriverException);
    expect(() => { generator.generateNumber(applicant); }).toThrowError(/Cannot hold more than one licence/);
  });

  it('testLicenceHolderAttemptsLogged ', () => {
    const applicant: ILicenceApplicant = new LicenceHolderApplicant();

    try {
      generator.generateNumber(applicant);
    } catch (error) {
    }

    expect(1).toEqual(logger.warnCalledCount);
    expect('duplicate application user: 123').toEqual(logger.warnLastMessage);
  });

  it('testLicenceNumberAreAtleast15Characters', () => {
    const applicant1: ILicenceApplicant = new ValidApplicant('M');
    const applicant2: ILicenceApplicant = new ValidApplicant('MD');
    const applicant3: ILicenceApplicant = new ValidApplicant('MDBF');
    const randomMap: Map<number, string> = new Map<number, string>();

    random.mockGenerate(
      randomMap
        .set(4, '0123')
        .set(5, '01234')
        .set(6, '012345')
    );

    expect('M11071999012345').toEqual(generator.generateNumber(applicant1));
    expect('MD1107199901234').toEqual(generator.generateNumber(applicant2));
    expect('MDBF110719990123').toEqual(generator.generateNumber(applicant3));
  });
});
