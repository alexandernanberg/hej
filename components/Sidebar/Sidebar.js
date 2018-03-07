import React from 'react'
import styled from 'styled-components'

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  background-color: var(--gray800);
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4.4rem;
  padding: 3.2rem 2.4rem;
`

export default () => (
  <Sidebar>
    <Logo>
      <span role="img" aria-label="Hej">
        👋
      </span>
    </Logo>
  </Sidebar>
)
