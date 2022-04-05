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

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />;

Basic.args = {
  children: 'Most populars',
};
