import { type Meta, type StoryObj } from '@storybook/react';
import Header from './Header.component';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  component: Header,
};

export const Default: Story = {
  args: {
    title: 'Minesweeper!',
  },
};

export default meta;
