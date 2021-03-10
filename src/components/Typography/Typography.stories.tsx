import React, { useContext } from 'react'
import { Story, Meta } from '@storybook/react'
import { H1, H2, H3, H4 } from '.'
import { ThemeContext } from '~/components/Container'

export default {
  title: 'Typography',
  component: H1
} as Meta

const Template1: Story = () => {
  const { theme } = useContext(ThemeContext)
  return <H1 theme={theme}>Header</H1>
}
const Template2: Story = () => {
  const { theme } = useContext(ThemeContext)
  return <H2 theme={theme}>Header</H2>
}
const Template3: Story = () => {
  const { theme } = useContext(ThemeContext)
  return <H3 theme={theme}>Header</H3>
}
const Template4: Story = () => {
  const { theme } = useContext(ThemeContext)
  return <H4 theme={theme}>Header</H4>
}

export const Default = Template1.bind({})

export const Heading1 = Template1.bind({})

export const Heading2 = Template2.bind({})

export const Heading3 = Template3.bind({})

export const Heading4 = Template4.bind({})
