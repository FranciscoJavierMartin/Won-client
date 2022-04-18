import { ComponentMeta, Story } from '@storybook/react';
import ExploreSidebar, { ExploreSidebarProps } from '.';

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {},
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof ExploreSidebar>;

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
);

Default.args = {};
