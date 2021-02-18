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
    color: ${props => (props.lightMode ? Color.black : Color.white)};
    font-family: ${Font.firaCode}, monospace;
  }
  button {
    background-color: ${props => (props.lightMode ? Color.white : Color.black)};
    border-color: ${props => (props.lightMode ? Color.black : Color.turq)};
    color: ${props => (props.lightMode ? Color.black : Color.turq)};
    font-family: ${Font.firaCode}, monospace;
  }
  div {
    font-family: ${Font.firaCode}, monospace;
  }
  p {
    font-family: ${Font.firaCode}, monospace;
    font-size: ${Font.size.base};
    line-height: 1.5;
  }
`

export const Layout = ({ children, lightMode }: LayoutProps): JSX.Element => (
  <>
    <GlobalStyle lightMode={lightMode} />
    {children}
  </>
)
