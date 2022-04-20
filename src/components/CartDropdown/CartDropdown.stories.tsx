import { ComponentMeta, Story } from '@storybook/react';
import CartDropdown, { CartDropdownProps } from '.';
import itemsMock from '@/components/CartList/mock';

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: itemsMock,
    total: '129.98 €',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof CartDropdown>;

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
);

Default.args = {};

export const Empty: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
);

Empty.args = {
  items: undefined,
  total: undefined,
};
