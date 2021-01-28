import React from 'react'

import { Page } from '.'
import * as HeaderStories from '../Header/stories'

const details = {
  title: 'Page',
  component: Page
}

export default details

const Template = (args) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
}
