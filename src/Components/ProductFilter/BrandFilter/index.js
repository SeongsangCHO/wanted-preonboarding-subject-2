import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrandList, BrnadItem, Container } from "./style";

class BrandFilter extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   brands: this.props.brands,
    //   showingBrandList: [],
    // };
  }

  // onBrandFilterItemClick = (e) => {
  //   const clickedBrand = e.target.dataset.kind;
  //   if (this.state.showingBrandList.includes(clickedBrand)) {
  //     this.setState({
  //       showingBrandList: this.state.showingBrandList.filter(
  //         (brand) => brand != clickedBrand
  //       ),
  //     });
  //     return;
  //   }
  //   if (clickedBrand === undefined) {
  //     return;
  //   } else {
  //     this.setState({
  //       showingBrandList: [...this.state.showingBrandList, clickedBrand],
  //     });
  //   }
  // };
  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    const { selectBrand, brand, selectedBrand } = this.props;
    return (
      <Container>
        {/* <BrandList onClick={this.onBrandFilterItemClick}/> */}
        <BrandList>
          <BrnadItem data-kind='ALL' onClick={selectBrand}>
            전체
          </BrnadItem>
          {brand.map((brandTitle) => {
            return (
              <BrnadItem
                data-kind={brandTitle}
                onClick={selectBrand}
                value={brandTitle}
                isSelected={selectedBrand.includes(brandTitle)}
                key={brandTitle}
              >
                {brandTitle}
              </BrnadItem>
            );
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
