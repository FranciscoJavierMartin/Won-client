import { ComponentMeta, Story } from '@storybook/react';
import ProfileMenu, { ProfileMenuProps } from '.';

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  args: {},
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof ProfileMenu>;

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
);

Default.args = {};
