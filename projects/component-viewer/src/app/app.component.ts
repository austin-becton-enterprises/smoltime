import { Component } from '@angular/core';
import { SmoltimeComponent } from 'smoltime';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SmoltimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-viewer';
}
