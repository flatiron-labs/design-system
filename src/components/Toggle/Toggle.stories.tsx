import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Toggle as ToggleComponent, ToggleProps } from '.'

export default {
  title: 'Navigation/Toggle',
  component: ToggleComponent
} as Meta

const Template: Story = (args: ToggleProps) => <ToggleComponent {...args} />

export const Toggle = Template.bind({})

export const ToggleWithLabel = Template.bind({})
ToggleWithLabel.args = {
  label: 'Try student home feature'
}
