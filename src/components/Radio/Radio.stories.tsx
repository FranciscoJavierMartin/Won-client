import { ComponentMeta, Story } from '@storybook/react';
import Radio, { RadioProps } from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
  args: {},
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as ComponentMeta<typeof Radio>;

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        label="First"
        labelFor="first"
        id="first"
        name="name"
        value="first"
        defaultChecked
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        label="Second"
        labelFor="second"
        id="second"
        name="name"
        value="second"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        label="Third"
        labelFor="third"
        id="third"
        name="name"
        value="third"
      />
    </div>
  </>
);

Default.args = {};
