import styled from 'styled-components'
import { space, variant } from '../style/system'
import { spacing } from '../style'

const variants = variant({
  small: {
    maxWidth: spacing(80),
  },
  default: {
    maxWidth: spacing(130),
  },
})

const Container = styled.div`
  ${space.withDefaults({ mx: 'auto' })}
  ${variants}
`

export default Container
