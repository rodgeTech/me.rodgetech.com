import styled from "styled-components"
import variables from "../../../data/variables"

export const NavbarLogo = styled.div`
  a {
    color: ${variables.black};
    font-size: 2.3rem;
    font-family: "GT-Walsheim-Pro-Bold";
  }
  @media (max-width: ${variables.breakpointPhone}) {
    display: none;
  }
`

export const NavbarElement = styled.div`
  text-align: center;
  padding-top: 30px;

  @media (max-width: ${variables.breakpointPhone}) {
    width: 100%;
  }
`

export const NavbarList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    display: inline-block;
  }
  > li a {
    font-size: 1.2rem;
    color: #232323;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: middle;
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span,
    svg {
      display: block;
      vertical-align: middle;
    }
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 1rem;
    }
  }
`
