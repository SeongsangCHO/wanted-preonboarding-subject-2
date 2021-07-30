import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { Container } from "../../Components/Header/style";

const BASE_URL = 'http://localhost:3000';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      productArrayLength: 0,
      randomNum: -1
    };
  }

  componentWillMount() {}

  handleBtnClick = () => {
    this.setState({ currentProduct: this.getOneProduct() })
  } 

  randomPicker = () => {
    const randomNum = Math.floor(Math.random() * this.state.productArrayLength); 
    if (randomNum === this.state.randomNum) {
      this.randomPicker();  
    }
    this.setState({ randomNum });
    return randomNum;
  }

  getOneProduct = () => {
    const randomNum = this.randomPicker();
    const loadedMockData = localStorage.getItem('mockData');
    const parsedMockData = JSON.parse(loadedMockData);
    return parsedMockData[randomNum];
  }

  componentDidMount = async () => {
    const fetchMockData = await fetch(`${BASE_URL}/MockData/data.json`);
    const productData = await fetchMockData.json();
    this.setState({ productArrayLength: productData.length })
    localStorage.setItem('mockData', JSON.stringify(productData));

    const currentProduct = this.getOneProduct();
    this.setState({ currentProduct });
    localStorage.setItem('watchedHistory', JSON.stringify(currentProduct));  
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    const productStateChange = this.state.currentProduct !== nextState.currentProduct;
    return productStateChange;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  componentWillUnmount() {}

  render() {
<<<<<<< HEAD
    const { currentProduct } = this.state;
    console.log(currentProduct);
    return (
      <div>
        {currentProduct.title}
        <button onClick={this.handleBtnClick}>돌려돌려!</button>
      </div>
=======
    return (
      <Container>
        <Header></Header>
      </Container>
>>>>>>> 7dd78c3050f91414cd867c838118eedc4105bf2a
    );
  }
}

ProductPage.propTypes = {
  productArrayLength: PropTypes.object
};

export default ProductPage;
