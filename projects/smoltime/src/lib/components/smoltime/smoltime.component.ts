import { Component, Input } from '@angular/core';
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
}
