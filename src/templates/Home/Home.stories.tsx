import { ComponentMeta, Story } from '@storybook/react';
import Home, { HomeProps } from '.';

export default {
  title: 'Home',
  component: Home,
  args: {},
} as ComponentMeta<typeof Home>;

export const Default: Story<HomeProps> = (args) => <Home {...args} />;

Default.args = {};
