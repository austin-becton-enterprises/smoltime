import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoltimeComponent } from 'smoltime';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SmoltimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-viewer';

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();

  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  get daysInMonth(): number[] {
    const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }

  get blanks(): any[] {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    return Array(firstDay).fill(0);
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }
}
