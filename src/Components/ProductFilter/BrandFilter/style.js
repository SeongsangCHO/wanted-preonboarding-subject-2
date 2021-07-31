import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
`;

export const BrandList = styled.ul`
  display: flex;
`;
export const BrnadItem = styled.li`
  cursor: pointer;
  padding: 13px;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => (props.isSelected ? `white` : `black`)};
  background-color: ${(props) => (props.isSelected ? `black` : `white`)};

  & + & {
    margin-left: 10px;
  }
`;
