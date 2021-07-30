import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 0 0 15px;
`;

export const BrandList = styled.ul`
  display: flex;
  & li {
    cursor: pointer;
    padding: 13px;
    border: 1px solid black;
    border-radius: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  & li + li {
    margin-left: 10px;
  }
`;
