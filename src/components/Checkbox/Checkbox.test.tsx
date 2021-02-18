import React from 'react'
import { render, screen } from '@testing-library/react'

import { Checkbox, CheckboxProps } from '.'

describe('Checkbox', () => {
  const testId = 'test-component'

  const renderComponent = () => {
    render(<Checkbox data-testid={testId} />)
  }

  it('should render children', () => {
    renderComponent()
    screen.getByRole(/checkbox/i)
  })
})
