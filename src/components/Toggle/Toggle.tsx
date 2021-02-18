import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { GlobalStyledProps } from '~/styles/global.types'

export interface ToggleProps extends GlobalStyledProps {
  'data-testid'?: string
  children?: React.ReactNode
  label?: string
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 15px;
  }
`

const CheckBoxLabel = styled.label<GlobalStyledProps>`
  border-color: ${props => (props.lightMode ? Color.black : Color.white)};
  border-radius: 17px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  display: flex;
  height: 25px;
  width: 42px;
  &::after {
    background: ${props => (props.lightMode ? Color.black : Color.white)};
    border-color: ${props => (props.lightMode ? Color.black : Color.white)};
    border-radius: 50%;
    border-style: solid;
    content: '';
    display: block;
    height: 11px;
    margin: 3px;
    transition: 0.2s;
    width: 11px;
  }
`

const CheckBox = styled.input`
  border-radius: 15px;
  height: 25px;
  opacity: 0;
  width: 40px;
  z-index: 1;
  &:checked + ${CheckBoxLabel} {
    border-color: ${Color.turq};
    background: ${Color.black};
    border-style: solid;
    border-width: 2px;
    &::after {
      background: ${Color.white};
      border-color: ${Color.white};
      border-radius: 50%;
      border-style: solid;
      content: '';
      display: block;
      height: 11px;
      margin: 3px;
      margin-left: 21px;
      transition: 0.2s;
      width: 11px;
    }
  }
`

const StyledLabel = styled.div`
  border-color: ${Color.black};
  padding: 4px;
  }
`

export const Toggle = (props: ToggleProps): JSX.Element => {
  const { label, 'data-testid': dataTestId, lightMode } = props

  return (
    <StyledDiv data-testid={dataTestId}>
      <div>
        <CheckBox id="checkbox" type="checkbox" aria-label="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" lightMode={lightMode} />
      </div>
      {label && <StyledLabel>{label}</StyledLabel>}
    </StyledDiv>
  )
}
