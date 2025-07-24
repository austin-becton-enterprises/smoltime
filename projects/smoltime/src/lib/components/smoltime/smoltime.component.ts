import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-smoltime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smoltime.component.html',
  styleUrls: ['./smoltime.component.scss']
})
export class SmoltimeComponent {
  @Input() title = 'Smoltime Component';
  @Input() description = 'A simple time management component';
  @Output() smoltimeOutput: EventEmitter<string> = new EventEmitter<string>()
  @ViewChild('calendar', {static : false}) calendarRef!: ElementRef;
  
  // Calendar popup visibility state
  showCalendar = false;
  selectedDate: string = '';
  // Toggle calendar popup
  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  // Close calendar popup
  closeCalendar(date: string) {
  this.showCalendar = false;
  this.selectedDate = date;
  if (this.selectedDate) {
    this.smoltimeOutput.emit(this.selectedDate);
  }

  }
}




