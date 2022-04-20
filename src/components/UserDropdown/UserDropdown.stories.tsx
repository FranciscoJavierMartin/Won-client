import { ComponentMeta, Story } from '@storybook/react';
import UserDropdown, { UserDropdownProps } from '.';

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  args: {},
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof UserDropdown>;

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
);

Default.args = {
  username: 'John Doe',
};
