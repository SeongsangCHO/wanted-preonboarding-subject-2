import PropTypes from "prop-types";
import { PageSelectorList, PageSelector } from "./style";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { randomNumber } from "../../Utils/Hooks/randomNumber";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    const { number } = this.props;
    return (
      number && (
        <nav>
          <PageSelectorList>
            <PageSelector>
              <Link
                className={
                  window.location.pathname.includes("/product")
                    ? "disable-link"
                    : "active-link"
                }
                to={`/product/${randomNumber(number)}`}
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
      )
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
