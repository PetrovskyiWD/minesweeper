import { type Meta, type StoryObj } from '@storybook/react';
import Counter from './Counter.component';

type Story = StoryObj<typeof Counter>;

const meta: Meta<typeof Counter> = {
  component: Counter,
};

export const Default: Story = {
  args: {
    children: '010',
  },
};

export default meta;
