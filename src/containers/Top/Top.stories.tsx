import { type Meta, type StoryObj } from '@storybook/react';
import Top from './Top.container';

type Story = StoryObj<typeof Top>;

const meta: Meta<typeof Top> = {
  component: Top,
};

export const Default: Story = {
  args: {
    title: 'Minesweeper',
    feature: 'Flag',
    firstAction: 'Ctrl',
    secondAction: 'Click',
  },
};

export default meta;
