import type { Meta, StoryObj } from '@storybook/angular';
import { ExampleComponent } from './example.component';

const meta: Meta<ExampleComponent> = {
  title: 'Components/Example',
  component: ExampleComponent,
  tags: ['autodocs'],
  render: (args: ExampleComponent) => ({
    props: args,
  }),
};

export default meta;
type Story = StoryObj<ExampleComponent>;

export const Primary: Story = {
  args: {
    // Add your component's input properties here
  },
};
