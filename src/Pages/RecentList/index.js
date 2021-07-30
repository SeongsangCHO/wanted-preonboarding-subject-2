import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: [],
      productData: [],
    };
  }

  makeBrnadData = () => {
    const { productData } = this.state;
    const brandArr = [];
    for (let brand of Object.entries(productData)) {
      brandArr.push(brand[1].brand);
    }
    const settedBrand = new Set(brandArr);
    const uniqeBrandArr = [...settedBrand];
    this.setState({ brand: uniqeBrandArr });
  };

  // componentWillMount() {}

  componentDidMount() {
    fetch("/MockData/data.json")
      .then((response) => response.json())
      .then((data) => this.setState({ productData: data }));
  }

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate() {
    const { productData, brand } = this.state;
    if (productData.length && !brand.length) {
      this.makeBrnadData();
    }
  }

  // componentWillUnmount() {}

  render() {
    const { productData, brand } = this.state;
    return (
      productData &&
      brand && (
        <div>
          recentListPage
          {/* <Navbar></Navbar> */}
          <div>관심상품</div>
          {brand.map((brandName) => (
            <div key={brandName}>
              <input type='checkbox' value={brandName} />
              <span>{brandName}</span>
            </div>
          ))}
          <div>상품정보</div>
        </div>
      )
    );
  }
}

RecentListPage.propTypes = {};

export default RecentListPage;
