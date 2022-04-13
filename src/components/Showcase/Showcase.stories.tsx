import { ComponentMeta, Story } from '@storybook/react';
import Showcase, { ShowcaseProps } from '.';
import highlightMock from '@/components/Highlight/mock';
import gamesMock from '@/components/GameCardSlider/mock';

export default {
  title: 'Showcase',
  component: Showcase,
  args: {},
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Showcase>;

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.args = {
  title: 'Most popular',
  highlight: highlightMock,
  games: gamesMock,
};
