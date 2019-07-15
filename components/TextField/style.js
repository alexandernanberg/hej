import styled, { css } from 'styled-components'
import {
  rem,
  spacing,
  durations,
  easings,
  fontFamily,
  colors,
} from '../../style'

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font: inherit;
  line-height: inherit;
  text-align: left;
  transform-origin: top left;
  color: ${colors.gray500};
  transform: translateY(${spacing(6)});
  cursor: text;
  will-change: transform;
  transition: transform ${durations.fast} ${easings.easeOutQuad};
`

export const Input = styled.input`
  margin-top: ${spacing(3)};
  padding: ${spacing(3)} 0;
  border: none;
  appearance: none;
  font: inherit;
  line-height: inherit;
  color: inherit;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: ${colors.gray200};
    line-height: normal;
  }

  &:invalid {
    box-shadow: none;
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: ${spacing(4)};
  font-family: ${fontFamily};
  font-size: ${rem(16)};
  line-height: 1.2em;
  color: white;

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    pointer-events: none;
    background-color: white;
    transform-origin: 100% 100%;
    transition: all ${durations.fast} ${easings.easeOutQuad};
  }

  &:hover {
    &::after {
      transform: scale3d(1, 2, 1);
    }
  }

  ${props =>
    (props.isActive || props.isFocused) &&
    css`
      ${/* sc-selector */ Label} {
        transform: scale(0.75);
        cursor: default;
      }
    `};

  ${/* sc-custom */ props =>
    props.isFocused &&
    css`
      &::after {
        transform: scale3d(1, 2, 1);
      }
    `};
`
