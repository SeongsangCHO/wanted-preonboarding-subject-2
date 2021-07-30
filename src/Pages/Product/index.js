import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { Container } from "../../Components/Header/style";

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Container>
        <Header></Header>
      </Container>
    );
  }
}

ProductPage.propTypes = {};

export default ProductPage;
