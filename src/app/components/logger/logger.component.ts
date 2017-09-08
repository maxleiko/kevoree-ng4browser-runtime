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

  private static MIN_HEIGHT = 27;

  private intervalId: any;
  private mouseDown = false;
  private lastY = 0;
  private onMouseUp: EventListener;
  private onMouseMove: EventListener;
  height = LoggerComponent.MIN_HEIGHT;

  constructor(public logger: LoggerService, private ref: ChangeDetectorRef) {
    this.intervalId = setInterval(() => {
      this.ref.markForCheck();
    }, 1000);

    this.onMouseUp = () => {
      this.mouseDown = false;
    };
    this.onMouseMove = (event: MouseEvent) => {
      if (this.mouseDown) {
        this.height += - (event.clientY - this.lastY);
        if (this.height < LoggerComponent.MIN_HEIGHT) {
          this.height = LoggerComponent.MIN_HEIGHT;
        } else if (this.height >= window.innerHeight - 82) { // 82 is a bit more than navbar height + action btn height
          this.height = window.innerHeight - 82;
        }
        this.lastY = event.clientY;
      }
    };
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  onGripMouseDown(event: MouseEvent) {
    this.mouseDown = true;
    this.lastY = event.clientY;
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

  toggleHeight(event: MouseEvent) {
    if (this.height !== LoggerComponent.MIN_HEIGHT) {
      this.height = LoggerComponent.MIN_HEIGHT;
    } else {
      this.height = window.innerHeight - 82;
    }
    event.preventDefault();
  }

  clearLogs() {
    this.logger.clear();
  }

  reverseLogs() {
    this.logger.reverseOrder();
  }
}
