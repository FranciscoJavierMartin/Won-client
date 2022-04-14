import { ComponentMeta, Story } from '@storybook/react';
import TextContent, { TextContentProps } from '.';
import textMock from './mock';

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof TextContent>;

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
);

Default.args = {};
