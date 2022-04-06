import { ComponentMeta, Story } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
} as ComponentMeta<typeof Menu>;

export const Default: Story<MenuProps> = (args) => <Menu {...args} />;

Default.args = {};
