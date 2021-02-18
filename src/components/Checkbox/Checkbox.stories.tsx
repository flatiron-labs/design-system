import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Checkbox as CheckboxComponent, CheckboxProps } from '.'

export default {
  title: 'Inputs/Checkbox',
  component: CheckboxComponent
} as Meta

const Template: Story = (args: CheckboxProps) => <CheckboxComponent {...args}>{args.label}</CheckboxComponent>

export const Checkbox = Template.bind({})
export const CheckboxWithLabel = Template.bind({})
CheckboxWithLabel.args = {
  label: 'This is my label'
}
