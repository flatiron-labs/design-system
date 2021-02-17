import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Toggle, ToggleProps } from '.'

export default {
  title: 'Navigation/Toggle',
  component: Toggle
} as Meta

const Template: Story = (args: ToggleProps) => <Toggle {...args} />

export const Default = Template.bind({})

export const Label = Template.bind({})
Label.args = {
  label: 'Try student home feature'
}
