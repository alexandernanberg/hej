import styled from 'styled-components'
import { space, layout, flexbox, backgroundColor } from '../style/system'

function coverSpace({ cover }) {
  if (cover) {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%',
    }
  }

  return null
}

const Box = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  coverSpace,
  space,
  layout,
  flexbox,
  backgroundColor,
)

export default Box
