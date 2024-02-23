import { type Meta, type StoryObj } from '@storybook/react';
import Reset from './Reset.component';

type Story = StoryObj<typeof Reset>;

const meta: Meta<typeof Reset> = {
  component: Reset,
};

export const Default: Story = {
  argTypes: {
    handleReset: { action: 'clicked' },
  },
};

export default meta;
