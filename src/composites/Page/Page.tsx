import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, Header, Footer, Sidebar } from '~/index' // Intentionally using the root index.ts

export interface PageProps {
  children: JSX.Element[]
  style?: React.CSSProperties
}

const StyledContent = styled.div`
  align-items: flex-start;
  align-content: flex-start;
  padding: 62px;
  transition: all 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
`

export const Page = ({ children, ...props }: PageProps): JSX.Element => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleOnExpand = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid item {...props}>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid container wrap="nowrap">
          <Sidebar
            onExpand={handleOnExpand}
            expanded={sidebarExpanded}
            xs={sidebarExpanded === true ? 7 : 2}
            sm={sidebarExpanded === true ? 5 : 1}
            md={2}
          />

          <Grid item xs={sidebarExpanded === true ? 5 : true} sm={sidebarExpanded === true ? 5 : true}>
            <StyledContent>
              <Header />
              {children}
            </StyledContent>
          </Grid>
        </Grid>

        <Footer />
      </Grid>
    </Grid>
  )
}
