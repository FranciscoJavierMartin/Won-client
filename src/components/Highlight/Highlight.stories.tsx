import { ComponentMeta, Story } from '@storybook/react';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy Now',
    buttonLink: '/rd2',
    backgroundImage: 'https://source.unsplash.com/user/willianjusten/1042x580',
  },
} as ComponentMeta<typeof Highlight>;

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />;

Default.args = {};
