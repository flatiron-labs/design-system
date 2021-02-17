import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { Icon, IconProps } from '.'

export default {
  title: 'Icons/Icon',
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > * {
    margin: 30px;
  }
`

const Template: Story = (args: IconProps) => (
  <Container>
    <Icon.Code {...args} />
    <Icon.Dial {...args} />
    <Icon.Exit {...args} />
    <Icon.Hamburger {...args} />
    <Icon.Home {...args} />
    <Icon.Location {...args} />
    <Icon.Lock {...args} />
    <Icon.Map {...args} />
    <Icon.Mail {...args} />
    <Icon.Settings {...args} />
    <Icon.Time {...args} />
    <Icon.User {...args} />
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  color: 'black'
}
