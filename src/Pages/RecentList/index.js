import React, { Component } from "react";
import Header from "../../Components/Header";
import BrandFilter from "../../Components/ProductFilter/BrandFilter";
import HideNoInterestingFilter from "../../Components/ProductFilter/HideNoInterestingFilter";
import OrderFilter from "../../Components/ProductFilter/OrderFilter";
import { Container, FilterOrderContainer, ListContainer } from "./style";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: [],
      selectedBrand: [],
      productData: [],
      selectedProductData: [],
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

  selectBrand = (event) => {
    const { selectedBrand } = this.state;
    const {
      target: {
        dataset: { kind },
      },
    } = event;
    if (kind === "ALL") return this.setState({ selectedBrand: [] });
    if (selectedBrand.includes(kind))
      return this.setState({
        selectedBrand: selectedBrand.filter((item) => item !== kind),
      });
    this.setState((state) => {
      return { selectedBrand: state.selectedBrand.concat(kind) };
    });
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

  componentDidUpdate(prevProps, prevState) {
    const {
      productData,
      brand,
      selectedBrand,
      selectedProductData,
      isSelected,
    } = this.state;
    if (productData.length && !brand.length) {
      this.makeBrnadData();
    }
    if (!selectedProductData.length && !selectedBrand.length) {
      this.setState({ selectedProductData: productData });
    }
    if (prevState.selectedBrand.length !== selectedBrand.length) {
      this.setState({
        selectedProductData: productData.filter((product) =>
          selectedBrand.some((p) => [product.brand].includes(p))
        ),
      });
    }
  }

  // componentWillUnmount() {}

  render() {
    const { brand, selectedProductData, selectedBrand } = this.state;
    const { selectBrand } = this;
    return (
      selectedProductData && (
        <Container>
          <Header />
          <FilterOrderContainer>
            <HideNoInterestingFilter />
            <OrderFilter />
          </FilterOrderContainer>
          <BrandFilter
            brand={brand}
            selectBrand={selectBrand}
            selectedBrand={selectedBrand}
          />
          <ListContainer>
            {selectedProductData.map((prouduct) => (
              <Card key={prouduct.title} data={prouduct} />
            ))}
          </ListContainer>
        </Container>
      )
    );
  }
}

RecentListPage.propTypes = {};

export default RecentListPage;
