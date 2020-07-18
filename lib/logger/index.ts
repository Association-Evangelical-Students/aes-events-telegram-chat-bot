import logger, { BaseLogger } from 'pino';

export interface ILogger {
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
  debug(...args: any[]): void;
}

export interface ILoggerConfig {
  level: 'info' | 'warn' | 'error' | 'debug';
}

export class Logger implements ILogger {
  private readonly instance: BaseLogger;

  constructor(loggerConfig: ILoggerConfig) {
    this.instance = logger({ level: loggerConfig.level });
  }

  public info(...args: any[]) {
    this.instance.info(args[0], ...args.slice(1, args.length));
  }

  public warn(...args: any[]) {
    this.instance.warn(args[0], ...args.slice(1, args.length));
  }

  public error(...args: any[]) {
    this.instance.error(args[0], ...args.slice(1, args.length));
  }

  public debug(...args: any[]) {
    this.instance.info(args[0], ...args.slice(1, args.length));
  }
}
