import React, { Component } from "react";
import Header from "../../Components/Header";
import BrandFilter from "../../Components/ProductFilter/BrandFilter";
import HideNoInterestingFilter from "../../Components/ProductFilter/HideNoInterestingFilter";
import OrderFilter from "../../Components/ProductFilter/OrderFilter";
import {
  Container,
  FilterOrderContainer,
  ListContainer,
  ItemWrapper,
  ItemTitle,
  ItemInfo,
  Button,
} from "./style";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";

class RecentListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Container>
        <Header />
        <FilterOrderContainer>
          <HideNoInterestingFilter />
          <OrderFilter />
        </FilterOrderContainer>
        <BrandFilter />
        <ListContainer>
          <ItemWrapper>
            <ItemTitle>
              <p>중고 나이키 테아 흰검 245 30000원</p>
            </ItemTitle>
            <ItemInfo>
              <Button isHasInteresting={false}>
                <img alt='*ㅅ*' />
                <span>관심없음등록</span>
              </Button>
              <p>30,000원</p>
            </ItemInfo>
          </ItemWrapper>
          <ItemWrapper>
            <ItemTitle>
              <p>중고 나이키 테아 흰검 245 30000원</p>
            </ItemTitle>
            <ItemInfo>
              <Button isHasInteresting={false}>
                <img alt='*ㅅ*' />
                <span>관심없음등록</span>
              </Button>
              <p>30,000원</p>
            </ItemInfo>
          </ItemWrapper>
        </ListContainer>
      </Container>
    );
  }
}

RecentListPage.propTypes = {};

export default RecentListPage;
