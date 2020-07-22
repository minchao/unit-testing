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
});
 */
