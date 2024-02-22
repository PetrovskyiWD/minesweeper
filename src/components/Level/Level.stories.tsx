import { type Meta, type StoryObj } from '@storybook/react';
import Level from './Level.component';

type Story = StoryObj<typeof Level>;

const meta: Meta<typeof Level> = {
  component: Level,
};

export const Default: Story = {
  args: {
    children: ['Easy', 'Medium', 'Hard'],
  },
};

export default meta;
