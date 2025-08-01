import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
export class SmoltimeComponent implements OnInit {
  @Input() title = 'Smoltime Component';
  @Input() description = 'A simple time management component';
  @Output() smoltimeOutput = new EventEmitter<Date>();
  
  selectedDate: Date | null = null;
  clickCount = 0;
  lastClickedElement = '';
  isActive = false;
  clickMessage = 'Click anywhere to start!';
  lastClickTime = '';

  constructor() {
    // Component constructor
  }

  ngOnInit() {
    // Component initialized
  }

  // Handle general click events
  onContainerClick(event: MouseEvent): void {
    this.clickCount++;
    this.lastClickedElement = 'container';
    this.lastClickTime = new Date().toLocaleTimeString();
    this.clickMessage = `Container clicked ${this.clickCount} times!`;
  }

  // Handle title click
  onTitleClick(event: MouseEvent): void {
    event.stopPropagation(); // Prevent container click from firing
    this.clickCount++;
    this.lastClickedElement = 'title';
    this.isActive = !this.isActive;
    this.lastClickTime = new Date().toLocaleTimeString();
    this.clickMessage = `Title clicked! Active: ${this.isActive}`;
  }

  // Handle date picker click
  onDatePickerClick(event: MouseEvent): void {
    event.stopPropagation(); // Prevent container click from firing
    this.clickCount++;
    this.lastClickedElement = 'datepicker';
  }

  // Handle date selection change
  onDateChange(): void {
    console.log('Date selected:', this.selectedDate);
    if (this.selectedDate) {
      this.smoltimeOutput.emit(this.selectedDate);
    }
  }

  // Handle reset button click
  onResetClick(): void {
    this.clickCount = 0;
    this.lastClickedElement = '';
    this.selectedDate = null;
    this.isActive = false;
    this.clickMessage = 'Click anywhere to start!';
    this.lastClickTime = '';
  }

  // Handle double click events
  onDoubleClick(event: MouseEvent): void {
    event.preventDefault();
    this.isActive = !this.isActive;
  }
}
