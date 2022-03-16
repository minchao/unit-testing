import { DrivingLicenceGenerator } from '../../../../src/mock/driving-licence/driving-licence-generator';
import { InvalidDriverException } from '../../../../src/mock/driving-licence/invalid-driver-exception';
import { ILicenceApplicant } from '../../../../src/mock/driving-licence/licence-applicant';

import { MockRandomNumbersGenerator } from './mock-random-numbers-generator';
import { SpyLogger } from './spy-logger';
import { UnderAgeApplicant } from './under-age-applicant';
import { LicenceHolderApplicant } from './licence-holder-applicant';

describe('Driving Licence', () => {
  let logger: SpyLogger;
  let random: MockRandomNumbersGenerator;
  let generator: DrivingLicenceGenerator;

  beforeEach(() => {
    logger = new SpyLogger();
    random = new MockRandomNumbersGenerator;
    generator = new DrivingLicenceGenerator(logger, random);
  });

  // 為了補齊以下測試案例，你需要準備對應的 Stub

  xit('testUnderAgeApplicantCannotGenerateLicence', () => {
    // 嘗試看看 assert 會拋出 Exception 的狀況
    // 可以參考 https://jestjs.io/docs/en/expect.html#tothrowerror
  });

  xit('testUnderAgeApplicationsAreLogged', () => {
    const applicant: ILicenceApplicant = new UnderAgeApplicant();

    try {
      generator.generateNumber(applicant);
    } catch (error) {
    }

    expect(1).toEqual(logger.warnCalledCount);
    expect('Under age application user: 123').toEqual(logger.warnLastMessage);
  });

  xit('testLicenceHolderCannotGenerateLicence', () => {
    // 請補齊測試案例
  });

  xit('testLicenceHolderAttemptsLogged ', () => {
    // 請補齊測試案例
  });
});
