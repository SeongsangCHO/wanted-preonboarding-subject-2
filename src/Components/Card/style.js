import styled, { css } from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  border: 0.5px solid black;
  margin-top: 10px;
  padding: 20px;
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
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Button = styled.button`
  border: 0.5px solid black;
  color: black;
  border-radius: 20px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #fff;

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
