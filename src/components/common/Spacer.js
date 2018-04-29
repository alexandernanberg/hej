import styled from 'styled-components'

const getSize = name => props =>
  (props[name] ? `var(--size-${props[name]})` : undefined)

const Spacer = styled.div`
  width: ${getSize('width')};
  height: ${getSize('height')};
`

export default Spacer
