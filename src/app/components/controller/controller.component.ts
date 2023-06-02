import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  @Output() startCycle: EventEmitter<void> = new EventEmitter<void>();
  isCycleOn: boolean = false;

  toggleCycle(checked: boolean): void {
    this.isCycleOn = checked;
    if (this.isCycleOn) {
      this.startCycle.emit();
    }
  }
}
