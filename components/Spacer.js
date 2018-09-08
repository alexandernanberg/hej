import styled from 'styled-components'

const getSize = name => props =>
  props[name] ? `var(--space-${props[name]})` : undefined

const Spacer = styled.div`
  width: ${getSize('w')};
  height: ${getSize('h')};
`

export default Spacer
