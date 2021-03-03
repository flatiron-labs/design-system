import React from 'react'
import { IconComponent } from './Icon'

export const Location: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" {...props}>
    <defs />
    <path stroke={color} strokeWidth={2} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
    <path stroke={color} strokeWidth={2} d="M12 13a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
)
