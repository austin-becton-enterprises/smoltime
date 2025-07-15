import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SmoltimeComponent } from '../../smoltime/src/lib/components/smoltime/smoltime.component';


bootstrapApplication(SmoltimeComponent, appConfig)
  .catch((err) => console.error(err));
