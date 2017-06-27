import {
  Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { LoggerService, LogLevel } from '../../services/logger.service';

@Component({
  selector: 'app-logger',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnDestroy {

  logsVisible = false;

  private intervalId: any;

  constructor(public logger: LoggerService, private ref: ChangeDetectorRef) {
    this.intervalId = setInterval(() => {
      this.ref.markForCheck();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  convertLevel(level: LogLevel): string {
    switch (level) {
      case LogLevel.DEBUG:
        return 'info';

      case LogLevel.WARN:
        return 'warning';

      case LogLevel.ERROR:
        return 'danger';
    }
  }

  toggleLogs(): void {
    this.logsVisible = !this.logsVisible;
  }

  clearLogs(): void {
    this.logger.clear();
  }

  reverseLogs(): void {
    this.logger.reverseOrder();
  }
}
