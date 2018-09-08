import styled, { css } from 'styled-components'

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font: inherit;
  line-height: inherit;
  text-align: left;
  transform-origin: top left;
  color: var(--gray500);
  transform: translateY(var(--space-5));
  cursor: text;
  transition: transform var(--duration-fast) var(--ease-out-quad);
`

export const Input = styled.input`
  margin-top: var(--space-3);
  padding: var(--space-3) 0;
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
    color: var(--gray200);
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
  margin-bottom: var(--space-4);
  font-family: var(--font-family);
  font-size: 1.6rem;
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
    transition: all var(--duration-fast) var(--ease-out-quad);
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
