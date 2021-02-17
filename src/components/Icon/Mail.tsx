import React from 'react'
import { IconProps } from './Icon.types'

export const Mail = ({ color, 'data-testid': dataTestId }: IconProps): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={dataTestId}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
      fill={color ?? 'white'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.18076 5.42662C1.49748 4.97417 2.12101 4.86414 2.57346 5.18085L12 11.7794L21.4265 5.18085C21.879 4.86414 22.5025 4.97417 22.8192 5.42662C23.1359 5.87907 23.0259 6.5026 22.5735 6.81932L12.5735 13.8193C12.2291 14.0603 11.7709 14.0603 11.4265 13.8193L1.42653 6.81932C0.974083 6.5026 0.864048 5.87907 1.18076 5.42662Z"
      fill={color ?? 'white'}
    />
  </svg>
)