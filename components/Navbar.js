import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { buttonBase } from './Button'

const Nav = styled.nav`
  display: flex;
  padding: 1.2rem;
  background-color: #222222;
`

const BarButton = styled.button`
  ${buttonBase};
  padding: 1.2rem;
  font-size: 1.8rem;
  color: white;
  background: transparent;
`

const Navbar = () => (
  <Nav>
    <BarButton>
      <Icon glyph="arrow-left" />
    </BarButton>
  </Nav>
)

export default Navbar
