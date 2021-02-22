import React from 'react'
import styled from 'styled-components'
import { Grid, Avatar, Icon, Hidden, GridSize } from '~/components'
import { Color, Media } from '~/styles'

interface StyledLinkProps {
  active?: boolean
  expanded?: boolean
}

const StyledButton = styled.button`
  border-top-style: none;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const StyledSidebar = styled(Grid)`
  border-right: 1px ${Color.greyDarkest} solid;
  padding: 62px 0 0 0;
  transition: all 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
`

const StyledLink = styled.a<StyledLinkProps>`
  color: ${Color.white};
  display: flex;
  font-size: 19px;
  text-decoration: none;
  padding: 14px 0 15px;
  justify-content: center;
  align-items: center;

  ${props =>
    props.active &&
    `
    color: ${Color.turq};
    background: linear-gradient(to right, ${Color.black}, ${Color.greyDarkest} 12%);
  `}

  &:hover {
    color: ${Color.turq};
    background: linear-gradient(to right, ${Color.black}, ${Color.greyDarkest} 12%);
  }

  ${props =>
    props.expanded &&
    `
    padding: 14px 0 15px 15%;
    justify-content: start;

    svg {
      margin-right: 10px;
    }
  `}

  ${Media.md} {
    padding: 14px 0 15px 15%;
    justify-content: start;

    svg {
      margin-right: 10px;
    }
  }
`

const StyledAvatar = styled(Avatar)`
  margin: 0 auto 40px;
`

export interface SidebarProps {
  expanded?: boolean
  onExpand(): void
  lg?: boolean | GridSize
  md?: boolean | GridSize
  sm?: boolean | GridSize
  xs?: boolean | GridSize
}

export const Sidebar = ({ expanded, onExpand, ...props }: SidebarProps): JSX.Element => (
  <StyledSidebar container direction="column" {...props}>
    <Hidden smDown>
      <StyledAvatar>JS</StyledAvatar>
    </Hidden>

    <Hidden mdUp>
      <StyledButton type="button" onClick={onExpand} aria-label="Open navigation">
        <Icon.Hamburger />
      </StyledButton>
    </Hidden>

    <Grid container component="nav" direction="column" aria-label="Primary">
      <StyledLink href="#" title="Home" expanded={expanded} active>
        <Icon.Home color={Color.white} />
        {expanded ? <>Home</> : <Hidden smDown>Home</Hidden>}
      </StyledLink>
      <StyledLink href="#" expanded={expanded} title="Profile">
        <Icon.User color={Color.white} />
        {expanded ? <>Profile</> : <Hidden smDown> Profile</Hidden>}
      </StyledLink>
      <StyledLink href="#" expanded={expanded} title="Settings">
        <Icon.Settings color={Color.white} />
        {expanded ? <>Settings</> : <Hidden smDown>Settings</Hidden>}
      </StyledLink>
    </Grid>
  </StyledSidebar>
)
