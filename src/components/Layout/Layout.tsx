import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Color, Font } from '~/styles'
import { GlobalStyledProps } from '~/styles/global.types'

export interface LayoutProps extends GlobalStyledProps {
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle<GlobalStyledProps>`
  body {
    background-color: ${props => (props.lightMode ? Color.white : Color.black)};
    font-family: ${Font.firaCode};
    color: ${props => (props.lightMode ? Color.black : Color.white)};
  }
  button {
    background-color: ${props => (props.lightMode ? Color.white : Color.black)};
    color: ${props => (props.lightMode ? Color.black : Color.turq)};
    border-color: ${props => (props.lightMode ? Color.black : Color.turq)};
    font-family: ${Font.firaCode};
  }
  div {
    font-family: ${Font.firaCode};
  }
`

export const Layout = ({ children, lightMode }: LayoutProps): JSX.Element => (
  <>
    <GlobalStyle lightMode={lightMode} />
    {children}
  </>
)
