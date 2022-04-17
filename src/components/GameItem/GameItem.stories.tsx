import { ComponentMeta, Story } from '@storybook/react';
import GameItem, { GameItemProps } from '.';

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Read Dead Redemption 2',
    price: '79.99 €',
  },
} as ComponentMeta<typeof GameItem>;

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />;

Default.args = {};

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
);

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/',
};
