import { ComponentMeta, Story } from '@storybook/react';
import Highlight, { HighlightProps } from '.';
import item from './ mock';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    ...item,
  },
} as ComponentMeta<typeof Highlight>;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

Default.args = {};

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};
