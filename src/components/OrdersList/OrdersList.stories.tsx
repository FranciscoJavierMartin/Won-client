import { ComponentMeta, Story } from '@storybook/react';
import OrdersList, { OrdersListProps } from '.';
import itemsMock from './mock';

export default {
  title: 'OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock,
  },
} as ComponentMeta<typeof OrdersList>;

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
);

Default.args = {};
