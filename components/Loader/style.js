import styled, { keyframes } from 'styled-components'
import { rem, colors } from '../../style'
import { variant } from '../../style/system'

const spin = keyframes`
  0% {
    opacity: 0.85;
  }

  50% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
`

export const Spinner = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  height: ${rem(24)};
  width: ${rem(24)};
  border-radius: 50%;
  color: ${variant(
    {
      gray: colors.gray800,
      default: 'white',
    },
    'color',
  )};
`

export const Blade = styled.div`
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 8%;
  height: 25%;
  border-radius: 50%/20%;
  background-color: currentColor;
  animation: ${spin} 1s linear infinite;

  &:nth-child(1) {
    animation-delay: calc(var(--spinner-delay) + -1.6666666667s);
    transform: rotate(30deg) translate(0, -150%);
  }

  &:nth-child(2) {
    animation-delay: calc(var(--spinner-delay) + -1.5833333333s);
    transform: rotate(60deg) translate(0, -150%);
  }

  &:nth-child(3) {
    animation-delay: calc(var(--spinner-delay) + -1.5s);
    transform: rotate(90deg) translate(0, -150%);
  }

  &:nth-child(4) {
    animation-delay: calc(var(--spinner-delay) + -1.4166666667s);
    transform: rotate(120deg) translate(0, -150%);
  }

  &:nth-child(5) {
    animation-delay: calc(var(--spinner-delay) + -1.3333333333s);
    transform: rotate(150deg) translate(0, -150%);
  }

  &:nth-child(6) {
    animation-delay: calc(var(--spinner-delay) + -1.25s);
    transform: rotate(180deg) translate(0, -150%);
  }

  &:nth-child(7) {
    animation-delay: calc(var(--spinner-delay) + -1.1666666667s);
    transform: rotate(210deg) translate(0, -150%);
  }

  &:nth-child(8) {
    animation-delay: calc(var(--spinner-delay) + -1.0833333333s);
    transform: rotate(240deg) translate(0, -150%);
  }

  &:nth-child(9) {
    animation-delay: calc(var(--spinner-delay) + -1s);
    transform: rotate(270deg) translate(0, -150%);
  }

  &:nth-child(10) {
    animation-delay: calc(var(--spinner-delay) + -0.9166666667s);
    transform: rotate(300deg) translate(0, -150%);
  }

  &:nth-child(11) {
    animation-delay: calc(var(--spinner-delay) + -0.8333333333s);
    transform: rotate(330deg) translate(0, -150%);
  }

  &:nth-child(12) {
    animation-delay: calc(var(--spinner-delay) + -0.75s);
    transform: rotate(360deg) translate(0, -150%);
  }
`
