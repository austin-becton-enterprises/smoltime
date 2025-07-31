import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-smoltime',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './smoltime.component.html',
  styleUrls: ['./smoltime.component.scss']
})
export class SmoltimeComponent {
  title = 'Smoltime Component';
  description = 'A simple time management component';
  selectedDate: Date | null = null;
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




