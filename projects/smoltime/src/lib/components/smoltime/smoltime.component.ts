import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'lib-smoltime',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './smoltime.component.html',
  styleUrls: ['./smoltime.component.scss']
})
export class SmoltimeComponent implements OnInit{
  @Input() title = 'Smoltime Component';
  @Input() description = 'A simple time management component';

   ngOnInit(): void {
    console.log('SmoltimeComponent is running');
    console.log('daysInMonth:', this.daysInMonth);
    console.log('blanks:', this.blanks);
  }

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

  selectedDates = new Set<number>();

  toggleDateSelection(day: number) {
    if (this.selectedDates.has(day)) {
      this.selectedDates.delete(day);
    } else {
      this.selectedDates.add(day);
    }
  }

}
