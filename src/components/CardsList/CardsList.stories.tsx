import { ComponentMeta, Story } from '@storybook/react';
import CardsList, { CardsListProps } from '.';
import cardsMock from '@/components/PaymentOptions/mock';

export default {
  title: 'CardsList',
  component: CardsList,
  args: {
    cards: cardsMock,
  },
} as ComponentMeta<typeof CardsList>;

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
);

Default.args = {};
