import { ComponentMeta, Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {},
} as ComponentMeta<typeof Checkbox>;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

Default.args = {};
