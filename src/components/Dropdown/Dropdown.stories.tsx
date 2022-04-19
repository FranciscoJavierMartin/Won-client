import { ComponentMeta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from '.';

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {},
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Dropdown>;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;

Default.args = {
  title: 'Click here',
  children: 'content',
};
