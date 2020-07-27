import { ILicenceApplicant } from '../../../src/mock/driving-licence/licence-applicant';

export class ValidApplicant implements ILicenceApplicant {
  private readonly initials: string;

  public constructor(initials: string) {
    this.initials = initials;
  }

  public getAge(): number {
    return 21;
  }

  public holdsLicence(): boolean {
    return false;
  }

  public getId(): number {
    return 123;
  }

  public getDateOfBirth(): Date {
    // Date 的月份是從 0 開始，11 月需要傳入 10
    // ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date
    return new Date(1999, 10, 7);
  }

  public getInitials(): string {
    return this.initials;
  }
}
