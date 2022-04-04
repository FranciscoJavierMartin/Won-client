import { ComponentMeta, Story } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default title',
    description: 'Default description',
  },
} as ComponentMeta<typeof Main>;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'Basic title',
  description: 'Basic description',
};
