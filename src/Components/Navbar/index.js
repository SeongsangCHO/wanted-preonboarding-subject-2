import { PageSelectorList, PageSelector } from "./style";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <PageSelectorList>
          <PageSelector>
            <Link
              className={
                window.location.pathname === "/product"
                  ? "disable-link"
                  : "active-link"
              }
              to='/product'
            >
              상품 상세
            </Link>
          </PageSelector>
          <PageSelector>
            <Link
              to='/recentList'
              className={
                window.location.pathname === "/recentList"
                  ? "disable-link"
                  : "active-link"
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