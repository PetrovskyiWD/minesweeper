import { type Meta, type StoryObj } from '@storybook/react';

import Cell from './Cell.component';

type Story = StoryObj<typeof Cell>;

const meta: Meta<typeof Cell> = {
  component: Cell,
};

export const Default: Story = {
  args: {
    children: 10,
  },
};

export const Empty: Story = {
  args: {
    children: 0,
  },
};

export default meta;
