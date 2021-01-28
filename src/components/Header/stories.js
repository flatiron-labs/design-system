import React from 'react'

import { Header } from '.'

const details =  {
  title: 'Header',
  component: Header
}

export default details

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {}
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
