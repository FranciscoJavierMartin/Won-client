import { ComponentMeta, Story } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Menu>;

export const Default: Story<MenuProps> = (args) => <Menu {...args} />;

Default.args = {};

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />;

Logged.args = {
  username: 'John Doe',
};
