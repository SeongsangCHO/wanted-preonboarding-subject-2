import styled from "styled-components";

export const NavbarWrapper = styled.nav``;

export const PageSelectorList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const PageSelector = styled.li`
  width: 100%;
  text-align: center;
  & > a.disable-link {
    pointer-events: none;
  }
`;
