import { ComponentMeta, Story } from '@storybook/react';
import GameDetails, { GameDetailsProps } from '.';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: {},
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof GameDetails>;

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);

Default.args = {};
