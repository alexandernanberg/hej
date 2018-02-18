import styled from 'styled-components'

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
  color: var(--blue500);
`

export default styled(BaseButton)`
  color: var(--blue500);
`
