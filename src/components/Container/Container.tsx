/* eslint-disable import/no-named-default */
import React from 'react'
import { flatironTheme, GlobalStyle } from '~/styles'

export interface ContainerProps {
  children: React.ReactNode
}

export const ThemeContext = React.createContext(flatironTheme)

export const Container = ({ children }: ContainerProps): JSX.Element => (
  <ThemeContext.Provider value={flatironTheme}>
    <GlobalStyle />
    <>{children}</>
  </ThemeContext.Provider>
)
