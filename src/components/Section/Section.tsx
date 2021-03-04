import React from 'react'
import styled from 'styled-components'

import { H4, P } from '~/components/Typography'
import { Icon } from '~/components/Icon'

export interface Content {
  minHeight?: string
}

export interface SectionProps extends Content {
  title?: string
  children: React.ReactNode
  style?: React.CSSProperties
  dynamic?: boolean
  data?: unknown
  error?: unknown
}

const StyledSection = styled.section`
  padding-bottom: 5em;
`

const Content = styled.div<Content>`
  ${props => props.minHeight && `min-height: ${props.minHeight};`}
`

const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Section = ({
  title,
  children,
  dynamic,
  data,
  error,
  minHeight = '100px',
  ...props
}: SectionProps): JSX.Element => {
  const loading = dynamic && !error && !data

  return (
    <StyledSection aria-busy={loading} {...props}>
      {title && <H4>{title}</H4>}

      <Content minHeight={minHeight}>
        {dynamic && error && (
          <StatusContainer>
            <P>failed to load</P>
          </StatusContainer>
        )}

        {loading && (
          <StatusContainer>
            <Icon.LoadingIndicator />
          </StatusContainer>
        )}

        {dynamic && data && children}

        {!dynamic && children}
      </Content>
    </StyledSection>
  )
}
