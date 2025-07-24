import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core'; // required for datepicker to work

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
    MatIconModule
  ],
  templateUrl: './smoltime.component.html',
  styleUrls: ['./smoltime.component.scss']
})
export class SmoltimeComponent {
  @Input() title = 'Smoltime Component';
  @Input() description = 'A simple time management component';
  @Output() smoltimeOutput: EventEmitter<string> = new EventEmitter<string>()

  // Preselected date    Note: 0 = January, 1 = February, ..., 11 = December
  selectedDate: Date = new Date(2077, 0, 23); // July is month 6 (zero-based)

  
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

<<<<<<< HEAD
  

}
=======
  }
}
>>>>>>> d0f64787e3a3d193e57df4046f04685ab4f4c646
