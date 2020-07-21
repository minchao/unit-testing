export interface ILicenceApplicant {
  getAge(): number;
  holdsLicence(): boolean;
  getId(): number;
  getDateOfBirth(): Date;
  getInitials(): string;
}
