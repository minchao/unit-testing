import { ILicenceApplicant } from '../../../src/mock/driving-licence/licence-applicant';

export class UnderAgeApplicant implements ILicenceApplicant {
  public getAge(): number {
    return 16;
  }

  public holdsLicence(): boolean {
    return false;
  }

  public getId(): number {
    return 123;
  }

  public getDateOfBirth(): Date {
    return new Date();
  }

  public getInitials(): string {
    return 'ABC';
  }
}
