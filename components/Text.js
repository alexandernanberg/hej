import styled from 'styled-components'

const Text = styled.p`
  font-family: var(--font-family);
  font-size: 1.6rem;
  line-height: 1.5em;
  color: white;

  & b {
    font-weight: 700;
  }
`

export const Title = styled(Text)`
  margin-bottom: var(--space-1);
  font-weight: bold;
  line-height: 1.2em;
`

export const H1 = styled(Title)`
  font-size: 4rem;
`

export const H2 = styled(Title)`
  font-size: 2.4rem;
`

export default Text
