import styled from 'styled-components'
import { Spinner } from '../Loader/style'
import { rem, spacing, durations, easings, fontFamily } from '../../style'

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  appearance: none;
  margin: 0;
  border: none;
  padding: ${spacing(4)} ${spacing(6)};
  border-radius: 2px;
  font-family: ${fontFamily};
  font-size: ${rem(12)};
  line-height: 1em;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  background: transparent;
  background-color: white;
  transition: all ${durations.fast} ${easings.easeOutQuad};

  &:hover,
  &:focus {
    /* transform: translateY(-1px); */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);
  }

  & span + svg,
  & svg + span {
    margin-left: ${spacing(1)};
  }

  & ${/* sc-selector */ Spinner} {
    margin: ${rem(-6)} 0;
  }
`
