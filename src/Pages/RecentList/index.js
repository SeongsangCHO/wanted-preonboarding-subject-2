import React, { Component } from "react";
import Header from "../../Components/Header";
import BrandFilter from "../../Components/ProductFilter/BrandFilter";
import HideNoInterestingFilter from "../../Components/ProductFilter/HideNoInterestingFilter";
import OrderFilter from "../../Components/ProductFilter/OrderFilter";
import {
  Container,
  FilterOrderContainer,
  ListContainer,
  ItemWrapper,
  ItemTitle,
  ItemInfo,
  Button,
} from "./style";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";

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
    const { selectedBrand, productData } = this.state;
    const {
      target: { value, checked },
    } = event;
    if (!checked && selectedBrand.includes(value))
      return this.setState({
        selectedBrand: selectedBrand.filter((item) => item !== value),
      });
    this.setState((state) => {
      return { selectedBrand: state.selectedBrand.concat(value) };
    });
    this.setState({
      selectedProductData: productData.filter((product) =>
        selectedBrand.some((p) => [product.brand].includes(p))
      ),
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
    const { productData, brand, selectedBrand, selectedProductData } =
      this.state;
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
    const { productData, brand, selectedBrand, selectedProductData } =
      this.state;
    const { selectBrand } = this;
    return (
      // productData &&
      // brand &&
      // selectedProductData && (
      //   <div>
      //     recentListPage
      //     {/* <Navbar></Navbar> */}
      //     <div>관심상품</div>
      //     {/* {console.log(
      //       productData.filter((product) =>
      //         selectedBrand.some((p) => [product.brand].includes(p))
      //       )
      //     )} */}
      //     {brand.map((brandName) => (
      //       <div key={brandName}>
      //         <input type='checkbox' value={brandName} onClick={selectBrand} />
      //         <span>{brandName}</span>
      //       </div>
      //     ))}
      //     <div>상품정보</div>
      //     {selectedProductData.map((item) => (
      //       <div key={item.title}>
      //         <h3>{item.title}</h3>
      //         <span>{item.brand}</span>
      //         <span>{item.price}</span>
      //       </div>
      //     ))}
      //   </div>
      // )
      <Container>
        <Header />
        <FilterOrderContainer>
          <HideNoInterestingFilter />
          <OrderFilter />
        </FilterOrderContainer>
        <BrandFilter />
        <ListContainer>
          <ItemWrapper>
            <ItemTitle>
              <p>중고 나이키 테아 흰검 245 30000원</p>
            </ItemTitle>
            <ItemInfo>
              <Button isHasInteresting={false}>
                <img alt='*ㅅ*' />
                <span>관심없음등록</span>
              </Button>
              <p>30,000원</p>
            </ItemInfo>
          </ItemWrapper>
          <ItemWrapper>
            <ItemTitle>
              <p>중고 나이키 테아 흰검 245 30000원</p>
            </ItemTitle>
            <ItemInfo>
              <Button isHasInteresting={false}>
                <img alt='*ㅅ*' />
                <span>관심없음등록</span>
              </Button>
              <p>30,000원</p>
            </ItemInfo>
          </ItemWrapper>
        </ListContainer>
      </Container>
    );
  }
}

RecentListPage.propTypes = {};

export default RecentListPage;
