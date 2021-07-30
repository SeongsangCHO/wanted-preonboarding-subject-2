import PropTypes from "prop-types";
import { PageSelectorList, PageSelector } from "./style";
import { Link, useHistory } from "react-router-dom";
import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.pathname,
    };
  }

  componentWillMount() {}

  componentDidMount() {
    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <nav>
        <PageSelectorList>
          <PageSelector>
            <Link
              className={this.state.route === "/product" ? "disable-link" : ""}
              to='/product'
            >
              상품 상세
            </Link>
          </PageSelector>
          <PageSelector>
            <Link
              to='/recentList'
              className={
                this.state.route === "/recentList" ? "disable-link" : ""
              }
            >
              최근 이력
            </Link>
          </PageSelector>
        </PageSelectorList>
      </nav>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
