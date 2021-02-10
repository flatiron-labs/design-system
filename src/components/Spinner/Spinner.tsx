import React from 'react'
import { Props } from './Spinner.types'
import { spinner } from './spinner.gif'

export const Spinner = ({ ...props }: Props): JSX.Element => {
  return <img src={spinner} alt="spinner" {...props} />
}
