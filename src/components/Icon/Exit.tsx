import React from 'react'
import { IconProps } from './Icon3.types'

export const Exit = ({ color, 'data-testid': dataTestId }: IconProps): JSX.Element => (
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
      d="M3.27273 2.66667C2.67522 2.66667 2.18182 3.26971 2.18182 4V20C2.18182 20.7303 2.67522 21.3333 3.27273 21.3333H20.7273C21.3248 21.3333 21.8182 20.7303 21.8182 20V4C21.8182 3.26971 21.3248 2.66667 20.7273 2.66667H3.27273ZM0 4C0 1.79695 1.47023 0 3.27273 0H20.7273C22.5298 0 24 1.79695 24 4V20C24 22.203 22.5298 24 20.7273 24H3.27273C1.47023 24 0 22.203 0 20V4Z"
      fill={color ?? 'white'}
    />
    <path
      d="M19.1642 12.6187C19.5059 12.277 19.5059 11.723 19.1642 11.3813L13.5957 5.81282C13.254 5.47111 12.7 5.47111 12.3583 5.81282C12.0166 6.15452 12.0166 6.70854 12.3583 7.05025L17.308 12L12.3583 16.9497C12.0166 17.2915 12.0166 17.8455 12.3583 18.1872C12.7 18.5289 13.254 18.5289 13.5957 18.1872L19.1642 12.6187ZM1.09091 12.875H18.5455V11.125H1.09091V12.875Z"
      fill={color ?? 'white'}
    />
  </svg>
)
