import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Header, HeaderProps } from '.'

export default {
  title: 'Typography/Headers',
  component: Header
} as Meta

const Template: Story = (args: HeaderProps) => <Header {...args}>Header</Header>

export const Header1 = Template.bind({})
Header1.args = {
  h1: true
}

export const Header2 = Template.bind({})
Header2.args = {
  h2: true
}

export const Header3 = Template.bind({})
Header3.args = {
  h3: true
}
