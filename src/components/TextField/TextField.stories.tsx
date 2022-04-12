import { ComponentMeta, Story } from '@storybook/react';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john@doe.com',
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
