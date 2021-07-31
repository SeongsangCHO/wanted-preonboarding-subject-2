import React, { Component } from "react";
import { Container } from "./style";

class HideNoInterestingFilter extends Component {
  render() {
    const { hideNoInterestingFilter } = this.props;
    return (
      <Container>
        <input type='checkbox' onChange={hideNoInterestingFilter} />
        <span> 관심없는 상품 숨기기</span>
      </Container>
    );
  }
}

export default HideNoInterestingFilter;
