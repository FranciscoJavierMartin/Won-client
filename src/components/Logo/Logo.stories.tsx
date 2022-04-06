import { ComponentMeta, Story } from '@storybook/react';
import Logo, { LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {},
} as ComponentMeta<typeof Logo>;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;

Default.args = {};
