import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Button from './Button'

const Nav = styled.nav`
  display: flex;
  padding: var(--space-3);
  background-color: #222222;
`

const BarButton = styled(Button)`
  padding: var(--space-3);
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
