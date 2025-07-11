import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Appointment {
  id: string;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  service: string;
  notes?: string;
}

@Component({
  selector: 'lib-smoltime',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './smoltime.component.html',
  styleUrls: ['./smoltime.component.scss']
})
export class SmoltimeComponent {
  @Input() title = 'Smoltime Component';
  @Input() description = 'A simple time management component';
  @Input() availableHours: string[] = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  @Input() services: string[] = ['Consultation', 'Follow-up', 'Review', 'Planning Session'];
  
  currentDate = new Date();
  selectedDate: Date | null = null;
  appointments: Appointment[] = [];
  showBookingModal = false;
  
  // Booking form
  bookingForm = {
    clientName: '',
    clientEmail: '',
    service: '',
    time: '',
    notes: ''
  };
  
  get currentMonth(): string {
    return this.currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
  
  get calendarDays(): (number | null)[] {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days: (number | null)[] = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  }
  
  get weekDays(): string[] {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }
  
  previousMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }
  
  nextMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }
  
  selectDate(day: number | null): void {
    if (day) {
      const selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
      
      // Prevent selecting past dates
      if (this.isPastDate(day)) {
        alert('Cannot schedule appointments for past dates. Please select a current or future date.');
        return;
      }
      
      this.selectedDate = selectedDate;
      this.showBookingModal = true;
    }
  }
  
  isToday(day: number | null): boolean {
    if (!day) return false;
    const today = new Date();
    const checkDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    return checkDate.toDateString() === today.toDateString();
  }
  
  isSelected(day: number | null): boolean {
    if (!day || !this.selectedDate) return false;
    const checkDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    return checkDate.toDateString() === this.selectedDate.toDateString();
  }
  
  hasAppointments(day: number | null): boolean {
    if (!day) return false;
    const checkDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    const dateString = checkDate.toDateString();
    return this.appointments.some(apt => new Date(apt.date).toDateString() === dateString);
  }
  
  isPastDate(day: number | null): boolean {
    if (!day) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison
    
    const checkDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    checkDate.setHours(0, 0, 0, 0);
    
    return checkDate < today;
  }
  
  getAvailableTimesForDate(): string[] {
    if (!this.selectedDate) return this.availableHours;
    
    const dateString = this.selectedDate.toDateString();
    const bookedTimes = this.appointments
      .filter(apt => new Date(apt.date).toDateString() === dateString)
      .map(apt => apt.time);
    
    return this.availableHours.filter(time => !bookedTimes.includes(time));
  }
  
  closeBookingModal(): void {
    this.showBookingModal = false;
    this.selectedDate = null; // Clear selected date when modal is closed
    this.resetBookingForm();
  }
  
  resetBookingForm(): void {
    this.bookingForm = {
      clientName: '',
      clientEmail: '',
      service: '',
      time: '',
      notes: ''
    };
  }
  
  bookAppointment(): void {
    if (!this.selectedDate || !this.bookingForm.clientName || !this.bookingForm.clientEmail || 
        !this.bookingForm.service || !this.bookingForm.time) {
      alert('Please fill in all required fields');
      return;
    }
    
    const appointment: Appointment = {
      id: Date.now().toString(),
      date: this.selectedDate.toDateString(),
      time: this.bookingForm.time,
      clientName: this.bookingForm.clientName,
      clientEmail: this.bookingForm.clientEmail,
      service: this.bookingForm.service,
      notes: this.bookingForm.notes
    };
    
    this.appointments.push(appointment);
    this.selectedDate = null; // Clear selected date after successful booking
    this.closeBookingModal();
    alert('Appointment booked successfully!');
  }
  
  get selectedDateString(): string {
    return this.selectedDate ? this.selectedDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }) : '';
  }
}