import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { Container } from "./style";

class Header extends Component {
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
        <Navbar number={this.props.number} />
      </Container>
    );
  }
}

Header.propTypes = {};

export default Header;
