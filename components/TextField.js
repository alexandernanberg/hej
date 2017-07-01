import React from 'react'
import styled from 'styled-components'
import SendIcon from '../icons/send.svg'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0;
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  font-size: 1.3rem;
  color: #222;
  background-color: #f6f6f6;
  // box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  border-top: solid 1px #efefef;
`

const Input = styled.textarea`
  display: block;
  flex-grow: 1;
  height: auto;
  padding: 16px 24px;
  border-radius: 3px;
  border: 0;
  border-radius: 0;
  font-size: 1.4rem;
  color: #444;
  outline: none;
  resize: none;
  white-space: pre-line;
  background-color: transparent;
  // border: solid 1px #e0e0e0;
`

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0;
  margin: auto 16px;
  background-color: transparent;
  cursor: pointer;
`

const TextField = (props) => (
  <Wrapper>
    <Input {...props} />
    <Button>
      <SendIcon width="32px" height="32px" fill="#2980b9"/>
    </Button>
  </Wrapper>
)

export default TextField
