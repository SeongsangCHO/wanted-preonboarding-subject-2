import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";

class Header extends Component {
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
      <header>
        header
        <Navbar></Navbar>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
