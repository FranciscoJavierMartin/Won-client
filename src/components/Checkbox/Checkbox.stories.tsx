import { ComponentMeta, Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: {
      action: 'checked',
    },
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Action"
        labelFor="action"
        isChecked
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Adventure"
        labelFor="adventure"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Strategy"
        labelFor="strategy"
      />
    </div>
  </>
);

Default.args = {};
