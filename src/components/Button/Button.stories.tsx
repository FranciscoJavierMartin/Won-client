import { ComponentMeta, Story } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {},
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now',
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
};
