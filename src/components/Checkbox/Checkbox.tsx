import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'

export interface CheckboxProps {
  children?: React.ReactNode
  label?: string
}

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  padding: 0.5rem;
`

const StyledLabel = styled.label`
  cursor: pointer;
  padding-left: 2px;
  padding-top: 2px;
`

const StyledInput = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid ${Color.turqDark};
  cursor: pointer;
  flex-shrink: 0;
  height: 20px;
  margin: 3px !important;
  outline: none;
  position: relative;
  width: 20px;
  :before {
    background: ${Color.turqDark};
    bottom: 50%;
    content: ' ';
    left: 50%;
    position: absolute;
    right: 50%;
    top: 50%;
    transition: all .1s;
  }
  :checked:before {
    bottom: 1px;
    left: 1px;
    right: 1px;
    top: 1px;
  }
}
`

export const Checkbox = ({ children, ...props }: CheckboxProps): JSX.Element => {
  const { label } = props
  return (
    <StyledDiv>
      <StyledInput type="checkbox" aria-label="checkbox" id="checkbox" />
      {label && (
        <StyledLabel htmlFor="checkbox" aria-label="checkbox">
          {children}
        </StyledLabel>
      )}
    </StyledDiv>
  )
}
