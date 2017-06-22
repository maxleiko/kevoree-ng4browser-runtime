import { Injectable } from '@angular/core';

export enum LogLevel {
  INFO, DEBUG, WARN, ERROR
}

export class LogLine {
  tag: string;
  line: string;
  date: Date;
  level: LogLevel;
}

@Injectable()
export class LoggerService {
  private logs: LogLine[];

  constructor() {
    this.logs = [];
  }

  info(tag: string, msg?: string): void {
    if (!msg) {
      msg = tag;
      tag = 'BrowserRuntime';
    }
    this.addLog({
      tag: tag,
      line: msg,
      date: new Date(),
      level: LogLevel.INFO
    });
  }

  debug(tag: string, msg?: string): void {
    if (!msg) {
      msg = tag;
      tag = 'BrowserRuntime';
    }
    this.addLog({
      tag: tag,
      line: msg,
      date: new Date(),
      level: LogLevel.DEBUG
    });
  }

  warn(tag: string, msg?: string): void {
    if (!msg) {
      msg = tag;
      tag = 'BrowserRuntime';
    }
    this.addLog({
      tag: tag,
      line: msg,
      date: new Date(),
      level: LogLevel.WARN
    });
  }

  error(tag: string, msg?: string): void {
    if (!msg) {
      msg = tag;
      tag = 'BrowserRuntime';
    }
    this.addLog({
      tag: tag,
      line: msg,
      date: new Date(),
      level: LogLevel.ERROR
    });
  }

  getLogs(): LogLine[] {
    return this.logs;
  }

  private addLog(logLine: LogLine) {
    if (this.logs.length > 400) {
      this.logs.pop();
    }
    this.logs.unshift(logLine);
  }
}
