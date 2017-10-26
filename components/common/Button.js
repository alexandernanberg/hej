import styled from 'styled-components'
import { colors } from '../../style'

export const BaseButton = styled.button`
  margin: 0;
  padding: 0.8em;
  border: none;
  outline: none;
  appearance: none;
  font-size: 1.6rem;
  background: transparent;
  cursor: pointer;
  fill: currentColor;
  color: ${colors.blue500};
`

export default styled(BaseButton)`
  color: ${colors.blue500}
`
