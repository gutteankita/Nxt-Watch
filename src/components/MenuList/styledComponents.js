import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-left: 12px;
  width: 80%;
  svg {
    color: #7e858e; /* Default color for the icon */
  }
  &.active {
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
    background-color: ${props =>
      props.theme === 'dark' ? '#666666' : '#cccccc'};
    && > svg {
      color: #ff0b37;
    }
  }
`

export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`

export const MenuLink = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
`

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-left: 30px;
  color: ${props => (props.theme === 'dark' ? '#e2e8f0' : '#475569')};
`
