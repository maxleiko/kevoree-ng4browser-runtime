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
  private tag: string;
  private logs: LogLine[];
  private reverseLogs: LogLine[];
  private reverse: boolean;

  constructor() {
    this.tag = 'BrowserRuntime';
    this.logs = [];
    this.reverseLogs = [];
    this.reverse = true;
  }

  info(msg: any): void {
    console.log(msg);
    this.addLog({
      tag: this.tag,
      line: msg,
      date: new Date(),
      level: LogLevel.INFO
    });
  }

  debug(msg: any): void {
    this.addLog({
      tag: this.tag,
      line: msg,
      date: new Date(),
      level: LogLevel.DEBUG
    });
  }

  warn(msg: any): void {
    console.warn(msg);
    this.addLog({
      tag: this.tag,
      line: msg,
      date: new Date(),
      level: LogLevel.WARN
    });
  }

  error(msg: any): void {
    console.error(msg);
    this.addLog({
      tag: this.tag,
      line: msg,
      date: new Date(),
      level: LogLevel.ERROR
    });
  }

  setLevel(level: any) {}
  setFilter(filter: any) {}

  getLogs(): LogLine[] {
    return this.reverse ? this.reverseLogs : this.logs;
  }

  clear(): void {
    this.logs.length = 0;
    this.reverseLogs.length = 0;
  }

  reverseOrder(): void {
    this.reverse = !this.reverse;
  }

  private addLog(logLine: LogLine) {
    // older to newest
    if (this.logs.length > 400) {
      this.logs.shift();
    }
    this.logs.push(logLine);

    // newer to oldest
    if (this.reverseLogs.length > 400) {
      this.reverseLogs.pop();
    }
    this.reverseLogs.unshift(logLine);
  }
}
