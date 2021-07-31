import styled, { css } from "styled-components";

export const ItemContainer = styled.div`
  position: relative;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 780px;
  border-radius: 10px;
  border: 0.5px solid black;
  margin-top: 10px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const ItemTitle = styled.div`
  height: 50px;
  p {
    font-size: 1.2rem;
    margin-right: 25px;
    line-height: 50px;
  }
`;

export const ItemInfo = styled.div`
  text-align: right;

  span {
    font-size: 0.8rem;
  }

  p {
    margin-top: 40px;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 25px;
  right: 20px;
  border: 0.5px solid black;
  color: black;
  border-radius: 20px;
  padding: 7px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: black;
  }

  ${({ isHasInteresting }) =>
    isHasInteresting &&
    css`
      border: 0.5px solid black;
      color: red;

      $:hover {
        border: 0.5px solid #1f29f0;
        color: #1f29f0;
      }
    `};
`;
