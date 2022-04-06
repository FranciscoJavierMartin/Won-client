import { ComponentMeta, Story } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {},
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>;

export const Basic: Story = (args) => <Button {...args} />;

Basic.args = {
  children: 'Buy now',
};
