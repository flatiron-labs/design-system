import React from 'react'
import { IconProps } from './Icon3.types'

export const Github = ({ color, 'data-testid': dataTestId }: IconProps): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={dataTestId}
  >
    <path
      d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 6C8.687 6 6 8.686 6 12C6 14.651 7.719 16.9 10.104 17.693C10.404 17.749 10.5 17.563 10.5 17.404V16.287C8.831 16.65 8.483 15.58 8.483 15.58C8.211 14.887 7.817 14.702 7.817 14.702C7.273 14.329 7.858 14.337 7.858 14.337C8.461 14.379 8.778 14.956 8.778 14.956C9.313 15.873 10.181 15.608 10.524 15.455C10.578 15.067 10.733 14.803 10.905 14.653C9.572 14.501 8.172 13.986 8.172 11.688C8.172 11.033 8.406 10.498 8.79 10.078C8.728 9.925 8.522 9.314 8.848 8.488C8.848 8.488 9.352 8.327 10.498 9.103C10.977 8.97 11.49 8.904 12 8.901C12.51 8.903 13.023 8.97 13.503 9.103C14.649 8.327 15.151 8.488 15.151 8.488C15.478 9.314 15.272 9.925 15.211 10.076C15.596 10.496 15.828 11.031 15.828 11.686C15.828 13.991 14.424 14.498 13.088 14.646C13.304 14.832 13.5 15.197 13.5 15.757V17.403C13.5 17.563 13.596 17.75 13.9 17.691C16.283 16.898 18 14.65 18 12C18 8.686 15.313 6 12 6Z"
      fill={color ?? 'white'}
    />
  </svg>
)
