import styled, { css } from "styled-components";

export const ItemContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 0.5px solid #111;
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
  border: 0.5px solid #111;
  color: #111;
  border-radius: 20px;
  padding: 7px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 0.8rem;

  ${({ isHasInteresting }) =>
    !isHasInteresting &&
    css`
      border: 0.5px solid #111;
      background-color:#F84242 ;
      color: #fff;

      &:hover {
        font-size: 0;
        border: 0.5px solid #1F29F0;
        background-color:#fff;
        color: #1F29F0;
          &:before{
          content: "😘관심없음 해제";
          font-size: 0.8rem;          
        }
      }
    `

  
  };

  ${({ isHasInteresting }) =>
    isHasInteresting &&
    css`
      &:hover {
        border: 0.5px solid #111;
        background-color:#111;
        color: #fff;
      }
    `
  };
    
`;
