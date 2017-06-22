import { Component } from '@angular/core';
import { LoggerService, LogLine, LogLevel } from '../../services/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent {
  constructor(private logger: LoggerService) {}

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
}
