import { ILogger } from '../../../../src/mock/driving-licence/logger';

export class SpyLogger implements ILogger {
  public warnCalledCount = 0;
  public warnLastMessage = '';

  public error(message: string): void {
    // intend to be empty
  }

  public info(message: string): void {
    // intend to be empty
  }

  public warn(message: string): void {
    this.warnCalledCount++;
    this.warnLastMessage = message;
  }
}
