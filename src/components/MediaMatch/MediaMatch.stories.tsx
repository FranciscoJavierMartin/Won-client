import { ComponentMeta, Story } from '@storybook/react';
import MediaMatch, { MediaMatchProps } from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  args: {},
} as ComponentMeta<typeof MediaMatch>;

export const Desktop: Story<MediaMatchProps> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

export const Mobile: Story<MediaMatchProps> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Desktop.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
