import logger, { BaseLogger } from 'pino';

export interface ILogger {
  info(message: string, ...other: any[]): void;
  debug(message: string, ...other: any[]): void;
  warn(message: string, ...other: any[]): void;
  error(message: string, ...other: any[]): void;
}

export interface ILoggerConfig {
  level: 'info' | 'debug' | 'warn' | 'error';
}

export class Logger implements ILogger {
  private readonly instance: BaseLogger;
  constructor(loggerConfig: ILoggerConfig) {
    this.instance = logger({ level: loggerConfig.level });
  }

  public info(message: string, ...other: any[]): void {
    this.instance.info(message, ...other);
  }

  public debug(message: string, ...other: any[]): void {
    this.instance.debug(message, ...other);
  }

  public warn(message: string, ...other: any[]): void {
    this.instance.warn(message, ...other);
  }

  public error(message: string, ...other: any[]): void {
    this.instance.error(message, ...other);
  }
}
