import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../projects/smoltime/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-webpack5'
  },
  features: {
    storyStoreV7: true
  }
};

export default config;
