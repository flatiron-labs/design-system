import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'

export interface CheckboxProps {
  children?: React.ReactNode
  label?: string
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`

const StyledLabel = styled.label`
  padding-top: 2px;
  padding-left: 2px;
`

const StyledInput = styled.input`
  position: relative;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  cursor: pointer;
  border: 2px solid ${Color.turqDark};
  margin: 3px !important;
  :before {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    transition: all .1s;
    background: ${Color.turqDark};
  }
  :checked:before {
        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
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
