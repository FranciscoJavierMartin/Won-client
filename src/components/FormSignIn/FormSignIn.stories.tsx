import { ComponentMeta, Story } from '@storybook/react';
import FormSignIn, { FormSignInProps } from '.';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  args: {},
} as ComponentMeta<typeof FormSignIn>;

export const Default: Story<FormSignInProps> = (args) => (
  <div style={{ maxWidth: 300, margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
);

Default.args = {};
