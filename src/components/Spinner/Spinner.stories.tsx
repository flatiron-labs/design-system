import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { Spinner } from './Spinner'

export default {
  title: 'Notifcations/Spinner',
  component: Spinner
} as Meta

const StyledContainer = styled.div`
    display: flex;  
    justify-content: center;
    height: 80px;
  }
`

const Template: Story = () => {
  return (
    <StyledContainer>
      <Spinner />
    </StyledContainer>
  )
}

export const Default = Template.bind({})
