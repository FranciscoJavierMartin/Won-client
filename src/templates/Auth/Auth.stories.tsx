import { ComponentMeta, Story } from '@storybook/react';
import Auth, { AuthProps } from '.';

export default {
  title: 'Auth',
  component: Auth,
  args: {},
} as ComponentMeta<typeof Auth>;

export const Default: Story<AuthProps> = (args) => <Auth {...args} />;

Default.args = {};
