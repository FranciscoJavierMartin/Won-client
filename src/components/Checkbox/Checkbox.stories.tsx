import { ComponentMeta, Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {
    onCheck: {
      action: 'checked',
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: Story<CheckboxProps> = (args) => (
  <Checkbox isChecked {...args} />
);

Default.args = {};
