import { CommonModule } from '@angular/common';
import { moduleMetadata, Preview } from '@storybook/angular';
import { SmoltimeComponent } from '../projects/smoltime/src/lib/components/smoltime/smoltime.component';

const preview: Preview = {
  decorators: [
    moduleMetadata({
      declarations: [SmoltimeComponent],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    }
  }
};

export default preview;
