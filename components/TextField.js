import React from 'react'
import styled from 'styled-components'
import SendIcon from '../icons/send.svg'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 0;
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  font-size: 1.3rem;
  color: #222;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
`

const Input = styled.input`
  display: block;
  flex-grow: 1;
  height: auto;
  padding: 16px;
  border: solid 1px #a0a0a0;
  border-radius: 3px;
  border: 0;
  border-radius: 0;
  font-size: 1.4rem;
  color: #444;
  outline: none;
  resize: none;
`

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0;
  background-color: #2980b9;
  margin: auto 16px;
  cursor: pointer;
`

const TextField = (props) => (
  <Wrapper>
    <Input {...props} />
    <Button>
      <SendIcon fill="white"/>
    </Button>
  </Wrapper>
)

export default TextField