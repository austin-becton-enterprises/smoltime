import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-smoltime',
  templateUrl: './smoltime.component.html',
  styleUrls: ['./smoltime.component.scss']
})
export class SmoltimeComponent {
  @Input() title = 'Smoltime Component';
  @Input() description = 'A simple time management component';
}
