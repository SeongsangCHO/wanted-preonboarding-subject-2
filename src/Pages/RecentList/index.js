import React, { Component } from "react";
import Header from "../../Components/Header";
import BrandFilter from "../../Components/ProductFilter/BrandFilter";
import HideNoInterestingFilter from "../../Components/ProductFilter/HideNoInterestingFilter";
import OrderFilter from "../../Components/ProductFilter/OrderFilter";
import { Container, FilterOrderContainer } from "./style";

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
      </Container>
    );
  }
}

RecentListPage.propTypes = {};

export default RecentListPage;
