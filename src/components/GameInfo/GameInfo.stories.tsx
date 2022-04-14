import { ComponentMeta, Story } from '@storybook/react';
import GameInfo, { GameInfoProps } from '.';
import gameMock from './mock';

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: gameMock,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof GameInfo>;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <GameInfo {...args} />;
  </div>
);

Default.args = {};
