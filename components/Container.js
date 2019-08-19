import styled from 'styled-components'
import { space, variant } from '../style/system'
import { spacing } from '../style'

const Container = styled.div`
  ${space.withDefaults({ mx: 'auto' })}
  ${variant({
    small: {
      maxWidth: spacing(80),
    },
    default: {
      maxWidth: spacing(130),
    },
  })}
`

export default Container
