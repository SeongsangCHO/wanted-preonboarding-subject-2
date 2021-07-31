import styled, { css } from "styled-components";
import { BsArrowRepeat } from "react-icons/bs";
import {FaGrimace} from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProductWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 550px;  
  margin-top: 15px;
  border-radius: 10px;
  border: 0.5px solid black;
  padding: 20px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  font-size: 3rem;

  ${({ theme }) => theme.mobile`
    height: 30vh;
    font-size: 1.5rem;
  `};
`;

export const ArrowRepeat = styled(BsArrowRepeat)`
  position: absolute;
  top: 20px;
  right: 200px;
  font-size: 4rem;
  cursor: pointer;

  ${({ theme }) => theme.mobile`
    font-size: 2.5rem;
    transform: translate(100%, 10%);
  `};
`;

export const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: 0.5px solid black;
  color: black;
  border-radius: 20px;
  padding: 15px 20px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 1.2rem;

  &::selection {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: black;
  }

  ${({ theme }) => theme.mobile`
    padding: 10px;
    font-size: 1rem;
  `};
`;

export const EmptyMessageFlexBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyIcon = styled(FaGrimace)`
  display: inline-block;
  line-height: 55px;
  font-size: 14rem;
  color: #5f5f5f;
`;

export const EmptyMessage = styled.div`
  color: #5f5f5f;
  padding-top: 20px;
`;

export const Brand = styled.span`
  line-height: 55px;
  ${({ theme }) => theme.mobile`
    line-height: 45px;
  `};
`;

export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 0 20px;
  transform: translate(-50%, -50%);
  display: inline-block;
  text-align: center;
`;

export const Price = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;