import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Logo = styled.img`
  width: 180px;
  margin: 12px;
  margin-left: 3rem;

  @media only screen and (max-width: 937px){
    width: 150px;
    margin: 8px;
  }
`

export const Nav = styled(NavLink)`
  text-decoration: none;
  font-family: monospace;
  font-weight: bold;
  font-size: 24px; 
  margin: 2rem;
  &:visited{
    color: #0000;
  }
  &.active{
    color: rgb(127, 127, 127);
  } 

  @media only screen and (max-width: 937px){
    font-size: 20px; 
    margin: 1rem;
  }
`

export const MenuList = styled.div`
    display: flex;
`

export const ContainerHeader = styled.div`
    background: #FFDE59;
    display: flex;
    justify-content: space-between;
    padding-right: 4rem;
    align-items: center;

    @media only screen and (max-width: 937px){
    padding-right: 0.5rem;
  }
`