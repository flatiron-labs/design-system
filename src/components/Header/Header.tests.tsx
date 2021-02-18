import React from 'react'
import { render, screen } from '@testing-library/react'

import { Header, HeaderProps } from '.'

describe('Header', () => {
  const testId = 'test-component'

  const renderComponent = (props: HeaderProps = {}) => {
    render(
      <Header data-testid={testId} {...props}>
        Header
      </Header>
    )
  }

  it('should render a header', () => {
    renderComponent()
    screen.getAllByText(/Header/i)
  })
})
