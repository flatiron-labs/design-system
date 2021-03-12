import React, { createContext } from 'react'
import { flatironTheme, Theme } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}

export const ThemeContext = createContext(flatironTheme)

export const ThemeProvider: React.FC = ({ children, theme }: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)
