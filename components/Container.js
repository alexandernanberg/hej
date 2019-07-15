import styled from 'styled-components'
import { padding, margin } from '../style/system'
import { spacing } from '../style'

function variant({ variant: v }) {
  switch (v) {
    case 'small':
      return {
        maxWidth: spacing(80),
      }

    default:
      return {
        maxWidth: spacing(130),
      }
  }
}

const Container = styled.div`
  ${margin.withDefaults({ mx: 'auto' })} ${padding}
  ${variant}
`

export default Container
