import styled from 'styled-components'

const TextField = styled.input`
  padding: 1rem 1.6rem;
  margin-bottom: 1.6rem;
  border: solid 1px var(--gray300);
  border-radius: 50px;
  outline: none;
  font-size: 1.6rem;
  line-height: normal;
  color: var(--gray600);
  white-space: pre-line;
  resize: none;
  background-color: white;
  box-shadow: none;
  appearance: none;

  &::placeholder {
    color: var(--gray400);
  }
`

export default TextField
