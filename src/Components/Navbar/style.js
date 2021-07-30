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
  }
  & > a.disable-link {
    pointer-events: none;
    border-bottom: 1px solid black;
  }
`;
