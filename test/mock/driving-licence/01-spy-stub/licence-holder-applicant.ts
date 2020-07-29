import { ILicenceApplicant } from '../../../../src/mock/driving-licence/licence-applicant';

export class LicenceHolderApplicant implements ILicenceApplicant {
  public getAge(): number {
    return 0;
    // fill the missing code
  }

  public holdsLicence(): boolean {
    return true;
    // fill the missing code
  }

  public getId(): number {
    return 1;
    // fill the missing code
  }

  public getDateOfBirth(): Date {
    return new Date();
    // fill the missing code
  }

  public getInitials(): string {
    return '';
    // fill the missing code
  }
}
