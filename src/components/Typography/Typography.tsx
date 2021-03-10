import styled from 'styled-components'

const H1 = styled.h1`
  ${props => props.theme.typography?.h1 ?? '1.25rem'}
`
const H2 = styled.h2`
  ${props => props.theme.typography?.h2 ?? '1.25rem'}
`
const H3 = styled.h3`
  ${props => props.theme.typography?.h3 ?? '1.25rem'}
`
const H4 = styled.h4`
  ${props => props.theme.typography?.h4 ?? '1.25rem'}
`
const H5 = styled.h5`
  ${props => props.theme.typography?.h5 ?? '1.25rem'}
`
const H6 = styled.h6`
  ${props => props.theme.typography?.h6 ?? '1.25rem'}
`
const P = styled.p`
  ${props => props.theme.typography?.subtitle1 ?? '1.25rem'}
`

export { P, H1, H2, H3, H4, H5, H6 }
