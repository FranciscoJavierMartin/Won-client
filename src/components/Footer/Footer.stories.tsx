import { ComponentMeta, Story } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {},
} as ComponentMeta<typeof Footer>;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
);

Default.args = {};
