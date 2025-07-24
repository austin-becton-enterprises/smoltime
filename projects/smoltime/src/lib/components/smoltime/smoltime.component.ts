import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'lib-smoltime',
    imports: [CommonModule, FormsModule],
    templateUrl: './smoltime.component.html',
    styleUrls: ['./smoltime.component.scss']
})
export class SmoltimeComponent implements OnInit{
  @Input() title = 'Smoltime Component';
  @Input() description = 'A simple time management component';

  @ViewChild('calendar', {static : false}) calendarRef!: ElementRef;
  
  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();

  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  selectedDates = new Set<number>();
  lastClickedDate: Date | null = null;

  ngOnInit(): void {
    console.log('SmoltimeComponent is running');
    console.log('daysInMonth:', this.daysInMonth);
    console.log('blanks:', this.blanks);
  }

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

  //Ref the calendar and capture the date user clicked on
  onDateClick(day: number) {
    this.toggleDateSelection(day);
    this.lastClickedDate = new Date(this.currentYear, this.currentMonth, day);
    console.log('Date clicked:', this.lastClickedDate);
  }

  toggleDateSelection(day: number) {
    if (this.selectedDates.has(day)) {
      this.selectedDates.delete(day);
    } else {
      this.selectedDates.add(day);
    }
  }

}




