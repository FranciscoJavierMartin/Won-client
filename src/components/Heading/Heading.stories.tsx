import { ComponentMeta, Story } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {},
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Heading>;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
  children: 'Most populars',
};
