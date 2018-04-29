import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import Icon from './common/Icon'
import { buttonBase } from './common/Button'

const Nav = styled.nav`
  display: flex;
  padding: 1.2rem;
  background-color: #222;
`

const BarButton = styled.button`
  ${buttonBase};
  font-size: 1.8rem;
  color: white;
  background: transparent;
  padding: 1.2rem;
`

const Navbar = withRouter(() => (
  <Nav>
    <BarButton>
      <Icon glyph="arrow-left" />
    </BarButton>
  </Nav>
))

export default Navbar
