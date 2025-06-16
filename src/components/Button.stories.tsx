import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Click Me',
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
}