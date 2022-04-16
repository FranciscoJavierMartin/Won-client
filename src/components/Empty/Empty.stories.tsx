import { ComponentMeta, Story } from '@storybook/react';
import Empty, { EmptyProps } from '.';

export default {
  title: 'Empty',
  component: Empty,
  args: {},
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Empty>;

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />;

Default.args = {
  title: 'A simple title',
  description: 'A simple description',
  hasLink: true,
};
