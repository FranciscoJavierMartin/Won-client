const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
    };
    return config;
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
};
