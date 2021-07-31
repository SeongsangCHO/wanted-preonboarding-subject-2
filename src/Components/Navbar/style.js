import styled from "styled-components";

export const NavbarWrapper = styled.nav``;

export const PageSelectorList = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
`;

export const PageSelector = styled.li`
  width: 100%;
  text-align: center;
  & > a {
    text-decoration: none;
    width: 100%;
    display: inline-block;
    font-size: 25px;
    &:link {
      color: #000;
    }

    &:visited {
      color: #000;
    }

    &:hover {
      color: #cc0000;
    }

    &:active {
      color: #ff0000;
    }
  }
  & > a.disable-link {
    pointer-events: none;
    border-bottom: 1px solid black;
  }
`;
