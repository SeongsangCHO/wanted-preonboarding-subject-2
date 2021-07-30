import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "./style";

class HideNoInterestingFilter extends Component {
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
        <input type='checkbox'></input>
        <span> 관심없는 상품 숨기기</span>
      </Container>
    );
  }
}

HideNoInterestingFilter.propTypes = {};

export default HideNoInterestingFilter;
