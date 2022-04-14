import { ComponentMeta, Story } from '@storybook/react';
import Gallery, { GalleryProps } from '.';
import items from './mock';

export default {
  title: 'Gallery',
  component: Gallery,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Gallery>;

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
);

Default.args = {};
