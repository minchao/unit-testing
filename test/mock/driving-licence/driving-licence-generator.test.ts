it.skip('dummy', () => {
  // Remove before fight
});

/**
 * Remove before fight
 *
describe('Driving Licence', () => {
  let _: SpyLogger;
  let _: MockRandomNumbersGenerator;
  let _: DrivingLicenceGenerator;

  beforeEach(() => {
    _ = new SpyLogger();
    _ = new MockRandomNumbersGenerator();

    _ = new DrivingLicenceGenerator(_, _);
  });

  it('testUnderAgeApplicantCannotGenerateLicence', () => {
    const applicant: ILicenceApplicant = new _();

    expect(() => { _.generateNumber(applicant); }).toThrowError(_);
    expect(() => { _.generateNumber(applicant); }).toThrowError(_);
  });

  it('testUnderAgeApplicationsAreLogged', () => {
    const applicant: ILicenceApplicant = new _();

    try {
      _.generateNumber(applicant);
    } catch (error) {
    }

    expect(1).toEqual(_);
    expect('Under age application user: _').toEqual(_);
  });

  it('testLicenceHolderCannotGenerateLicence', () => {
  });

  it('testLicenceHolderAttemptsLogged', () => {
  });

  it('駕照號碼至少需要 15 個字元', () => {

    // fill the missing code

    expect('M11071999012345').toEqual(_);
    expect('MD1107199901234').toEqual(_);
    expect('MDBF110719990123').toEqual(_);
  });
});
 */
