import { ComponentMeta, Story } from '@storybook/react';
import { Email } from '@styled-icons/material-outlined';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'Email',
    initialValue: '',
    placeholder: 'john@doe.com',
    icon: <Email />,
    disabled: false,
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as ComponentMeta<typeof TextField>;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

Default.args = {};

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  error: 'Error message',
};
