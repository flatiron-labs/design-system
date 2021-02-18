import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import { Breakpoint, Color, Font } from '~/styles'
import { Icon } from '~/components/Icon'

export interface StyledSideNavProps {
  isOpen: boolean
}

export interface SideNavProps extends StyledSideNavProps {
  'data-testid'?: string
  children?: React.ReactNode
  handleClose?(): void
}

const StyledNav = styled.nav<StyledSideNavProps>`
  border: 4px;
  border-color: ${Color.greyDarkest};
  border-style: none solid none none;
  font-family: ${Font.firaCode};
  height: 100vh;
  left: 0;
  padding-top: 30px;
  transition: transform 3s ease-in-out;
  width: 200px;
}`

const StyledBurgerContainer = styled.nav`
  border: 4px;
  border-color: ${Color.greyDarkest};
  border-style: none solid none none;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: absolute;
  padding-top: 10px;
  top: 0;
  left: 0;
  transition: transform 2s ease-in-out;
  width: 60px;
}`

const StyledBurger = styled(Icon.Hamburger)<SideNavProps>`
  color: white;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: transform 2s ease-in-out;
`

export const SideNav = ({ children, ...props }: SideNavProps): JSX.Element => {
  const [isOpen, setOpen] = useState(true)
  const windowWidth = useWindowWidth()

  useEffect(() => {
    if (windowWidth < Breakpoint.sm) {
      setOpen(false)
    }
    if (windowWidth > Breakpoint.sm) {
      setOpen(true)
    }
  }, [windowWidth, isOpen])

  const openSideNav = () => {
    setOpen(isOpen ?? false)
  }

  return (
    <>
      {isOpen ? (
        <StyledNav {...props} isOpen={isOpen}>
          <>{children}</>
        </StyledNav>
      ) : (
        <StyledBurgerContainer>
          <StyledBurger onClick={openSideNav} isOpen={isOpen} />
        </StyledBurgerContainer>
      )}
    </>
  )
}
