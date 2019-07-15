import styled from 'styled-components'
import { spacing, colors } from '../style'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: ${spacing(24)};

  :not(:last-child) {
    border-bottom: solid 1px ${colors.gray900};
  }
`
