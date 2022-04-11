import { ComponentMeta, Story } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from '.';
import items from './mock';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof BannerSlider>;

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);

Default.args = {};
