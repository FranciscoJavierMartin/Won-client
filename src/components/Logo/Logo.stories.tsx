import { ComponentMeta, Story } from '@storybook/react';
import Logo from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {},
} as ComponentMeta<typeof Logo>;

export const Basic: Story = (args) => <Logo {...args} />;

Basic.args = {};
