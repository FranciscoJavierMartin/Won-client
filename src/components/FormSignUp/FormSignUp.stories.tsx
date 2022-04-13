import { ComponentMeta, Story } from '@storybook/react';
import FormSignUp, { FormSignUpProps } from '.';

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
  args: {},
} as ComponentMeta<typeof FormSignUp>;

export const Default: Story<FormSignUpProps> = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp {...args} />
  </div>
);

Default.args = {};
