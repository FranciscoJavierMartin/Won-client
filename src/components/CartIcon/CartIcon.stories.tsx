import { ComponentMeta, Story } from '@storybook/react';
import CartIcon, { CartIconProps } from '.';

export default {
  title: 'CartIcon',
  component: CartIcon,
  args: {},
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof CartIcon>;

export const Default: Story<CartIconProps> = (args) => <CartIcon {...args} />;

Default.args = {};

export const WithItems: Story<CartIconProps> = (args) => <CartIcon {...args} />;

WithItems.args = {
  quantity: 3,
};
