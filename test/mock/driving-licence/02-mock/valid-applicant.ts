import { ILicenceApplicant } from '../../../../src/mock/driving-licence/licence-applicant';

export class ValidApplicant implements ILicenceApplicant {
  private readonly initials: string;

  public constructor(initials: string) {
    this.initials = initials;
  }

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
    // Hint!
    // Date 的月份是從 0 開始，11 月需要傳入 10
    // ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date

    // fill the missing code
  }

  public getInitials(): string {
    return '';
    // fill the missing code
  }
}
