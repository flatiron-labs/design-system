import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'

export interface StyledSideNavItemProps {
  active?: boolean
}

export interface SideNavItemProps extends StyledSideNavItemProps {
  active?: boolean
  children?: React.ReactNode
  closed?: boolean
  'data-testid'?: string
  icon?: React.ReactNode
  handleClose?(): void
}

const StyledDiv = styled.div<StyledSideNavItemProps>`
  background-color: ${props => (props.active ? Color.greyDarkest : 'transparent')};
  box-shadow: ${props => (props.active ? `4px 0px 0px 0px ${Color.greyDarkest}` : 0)};
  display: flex;
  font-family: 'Fira Code';
  font-size: 20px;
  height: 40px;
  justify-content: center;
  padding-top: 15px;
  transition: color 0.3s linear;
`

const StyledA = styled.a<StyledSideNavItemProps>`
  color: ${props => (props.active ? Color.turq : Color.greyLight)};
  padding-left: 10px;
  &:hover {
    color: ${props => (!props.active ? Color.white : Color.turq)};
    cursor: pointer;
  }
}
`

export const SideNavItem = ({ children, ...props }: SideNavItemProps): JSX.Element => {
  const { active, 'data-testid': dataTestId, icon } = props

  return (
    <div data-testid={dataTestId}>
      <StyledDiv active={active}>
        {icon && icon}
        <StyledA active={active}>{children}</StyledA>
      </StyledDiv>
    </div>
  )
}
