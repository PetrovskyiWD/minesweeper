import type { StoryObj, Meta } from '@storybook/react';
import Legend from './Legend.component';

type Story = StoryObj<typeof Legend>;

const meta: Meta<typeof Legend> = {
  component: Legend,
};

export const Default: Story = {
  args: {
    feature: 'Flag',
    firstAction: 'Ctrl',
    secondAction: 'Click',
  },
};

export default meta;
