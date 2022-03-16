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

  xit('駕照號碼至少需要 15 個字元', () => {
    // const applicant1: ILicenceApplicant = new Stub();
    // const applicant2: ILicenceApplicant = new Stub();
    // const applicant3: ILicenceApplicant = new Stub();
    const randomMap: Map<number, string> = new Map<number, string>();

    // Map(隨機碼長度, 隨機碼數字)
    random.mockGenerate(
      randomMap
        .set(4, '0123')
        .set(5, '01234')
        .set(6, '012345')
    );

    // expect('').toEqual(generator.generateNumber(applicant1));
    // expect('').toEqual(generator.generateNumber(applicant2));
    // expect('').toEqual(generator.generateNumber(applicant3));
  });
});
