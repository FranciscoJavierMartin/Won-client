import { ComponentMeta, Story } from '@storybook/react';
import FormProfile, { FormProfileProps } from '.';

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  args: {},
} as ComponentMeta<typeof FormProfile>;

export const Default: Story<FormProfileProps> = (args) => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile {...args} />
  </div>
);

Default.args = {};
