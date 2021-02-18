import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { SideNav, SideNavProps, SideNavItem } from '.'
import { Icon } from '../Icon'
import { Color } from '~/styles'

export default {
  title: 'Navigation/SideNav',
  component: SideNav
} as Meta

const Template: Story<SideNavProps> = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(true)
  }
  return (
    <SideNav handleClose={handleClose} isOpen={isOpen}>
      <SideNavItem icon={<Icon.Home />}>Home</SideNavItem>
      <SideNavItem icon={<Icon.User color={Color.turq} />} active>
        Profile
      </SideNavItem>
      <SideNavItem icon={<Icon.Settings />}>Settings</SideNavItem>
    </SideNav>
  )
}

export const Default = Template.bind({})
