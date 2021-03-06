import { ComponentMeta, Story } from '@storybook/react';
import CartList, { CartListProps } from '.';
import itemsMock from './mock';

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: itemsMock,
    total: '129.98 €',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof CartList>;

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />;
  </div>
);

Default.args = {};

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />;
  </div>
);

WithButton.args = {
  hasButton: true,
};

export const Empty: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />;
  </div>
);

Empty.args = {
  items: [],
  total: undefined,
};
