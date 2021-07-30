import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrandList, Container } from "./style";

class BrandFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: this.props.brands,
      showingBrandList: [],
    };
  }

  onBrandFilterItemClick = (e) => {
    const clickedBrand = e.target.dataset.kind;
    if (this.state.showingBrandList.includes(clickedBrand)) {
      this.setState({
        showingBrandList: this.state.showingBrandList.filter(
          (brand) => brand != clickedBrand
        ),
      });
      return;
    }
    if (clickedBrand === undefined) {
      return;
    } else {
      this.setState({
        showingBrandList: [...this.state.showingBrandList, clickedBrand],
      });
    }
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Container>
        <BrandList onClick={this.onBrandFilterItemClick}>
          <li data-kind='ALL'>전체</li>
          {this.state.brands.map((brand) => {
            return <li data-kind={brand}>{brand}</li>;
          })}
        </BrandList>
      </Container>
    );
  }
}

BrandFilter.propTypes = {};

BrandFilter.defaultProps = {
  brands: ["나이키", "농담곰", "샤넬", "구찌"],
};
export default BrandFilter;
