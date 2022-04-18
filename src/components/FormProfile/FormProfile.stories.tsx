import { ComponentMeta, Story } from '@storybook/react';
import FormProfile, { FormProfileProps } from '.';

export default {
  title: 'FormProfile',
  component: FormProfile,
  args: {},
} as ComponentMeta<typeof FormProfile>;

export const Default: Story<FormProfileProps> = (args) => (
  <FormProfile {...args} />
);

Default.args = {};
