import { type Meta, type StoryObj } from '@storybook/react';

import Scoreboard from './Scoreboard.container';

type Story = StoryObj<typeof Scoreboard>;

const meta: Meta<typeof Scoreboard> = {
  component: Scoreboard,
};

export const Default: Story = {
  args: {
    count: '010',
    levels: ['Easy', 'Medium', 'Hard'],
    time: '000',
  },
  argTypes: {
    onReset: { action: 'clicked' },
  },
};

export default meta;
