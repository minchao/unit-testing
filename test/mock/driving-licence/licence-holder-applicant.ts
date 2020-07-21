import { ILicenceApplicant } from '../../../src/mock/driving-licence/licence-applicant';

export class LicenceHolderApplicant implements ILicenceApplicant {
  public getAge(): number {
    return 18;
  }

  public holdsLicence(): boolean {
    return true;
  }

  public getId(): number {
    return 123;
  }

  public getDateOfBirth(): Date {
    return new Date();
  }

  public getInitials(): string {
    return 'DEF';
  }
}
