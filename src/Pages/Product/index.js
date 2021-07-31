import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { Container, ProductWrapper, ArrowRepeat, Button, EmptyMessageFlexBox, EmptyIcon, EmptyMessage, Brand, Title, Price } from "../Product/style";
const BASE_URL = "http://localhost:3000";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrintData: {},
      currentTitle: "",
      printableData: [],
      recentListData: [],
    };
  }

  setRecentListNoInterestingData = (isInteresting) => {
    const recentLocal = this.getLocalStorageData("recentList");
    if (
      recentLocal.some(
        (item) => item?.title === this.state.currentPrintData.title
      )
    ) {
      this.setLocalStorageData("recentList", [
        ...recentLocal.filter(
          (item) => item.title !== this.state.currentPrintData.title
        ),
        {
          ...this.state.currentPrintData,
          time: Date.now(),
          isInteresting: isInteresting,
        },
      ]);
    } else {
      this.setLocalStorageData("recentList", [
        ...recentLocal,
        {
          ...this.state.currentPrintData,
          time: Date.now(),
          isInteresting: isInteresting,
        },
      ]);
    }
    this.setLocalStorageData("printableLocalData", this.state.printableData);
  };

  noInteresting = () => {
    const { printableData, currentTitle } = this.state;
    this.setState(
      (prev) => ({
        recentListData: [],
      }),
      () => this.setRecentListNoInterestingData(false)
    );
    const filterdPrintableData = printableData.filter(
      (data) => data.title !== currentTitle
    );
    this.setState(
      {
        printableData: [...filterdPrintableData],
      },
      () => this.randomPicker()
    );
  };

  randomPicker = () => {
    const { printableData, currentTitle } = this.state;

    const printableLength = printableData.length;

    let randomIndex = Math.floor(Math.random() * printableLength);
    while (
      printableLength > 0 &&
      printableData[randomIndex].title === currentTitle
    ) {
      randomIndex = Math.floor(Math.random() * printableLength);
    }
    if (!(randomIndex > printableLength || printableLength === 0)) {
      this.setState(
        {
          currentTitle: printableData[randomIndex].title,
          currentPrintData: printableData[randomIndex],
        },
        () => this.setRecentListNoInterestingData(true)
      );
    }
  };

  getLocalStorageData = (dataName) => {
    const localData = localStorage.getItem(dataName);
    if (localData === null) {
      return [];
    }
    return JSON.parse(localData);
  };

  setLocalStorageData = (itemName, data) => {
    localStorage.setItem(itemName, JSON.stringify(data));
  };
  getApiData = async () => {
    const fetchApiData = await fetch(`${BASE_URL}/MockData/data.json`);
    const apiData = await fetchApiData.json();
    this.setState({
      printableData: [
        ...apiData.map((data) => ({ ...data, isInteresting: true })),
      ],
    });
    this.randomPicker();
  };
  async componentDidMount() {
    const localData = await this.getLocalStorageData("printableLocalData");
    if (localStorage.getItem("printableLocalData") === null) {
      const fetchApiData = await fetch(`${BASE_URL}/MockData/data.json`);
      const apiData = await fetchApiData.json();

      this.setState({
        printableData: [
          ...apiData.map((data) => ({ ...data, isInteresting: true })),
        ],
      });
      this.setLocalStorageData("printableLocalData", this.state.printableData);
    } else if (localData.length === 0) {
    } else {
      this.setState({
        printableData: [...localData],
      });
    }
    this.randomPicker();
  }

  componentWillUnmount() {
    this.setLocalStorageData("printableLocalData", this.state.printableData);
  }

  render() {
    const { printableData, currentPrintData } = this.state;
    const { price } = currentPrintData; 
    return (
      <Container>
        <Header></Header>
        {printableData.length === 0 ? (
          <ProductWrapper>
            <EmptyMessageFlexBox>
              <EmptyIcon />
              <EmptyMessage>상품이 없어요우!</EmptyMessage>
            </EmptyMessageFlexBox>
          </ProductWrapper>
        ) : (
          <ProductWrapper>
            <Brand>{currentPrintData.brand}</Brand>
            <ArrowRepeat onClick={printableData.length !== 1 && this.randomPicker} />
            <Button onClick={this.noInteresting}>관심없음 등록</Button>
            <Title>{currentPrintData.title}</Title>
            <Price>{`${Number(price).toLocaleString()}원`}</Price>
          </ProductWrapper>
        )}
      </Container>
    );
  }
}

ProductPage.propTypes = {
  currentPrintData: PropTypes.object,
  currentTitle: PropTypes.string,
};

export default ProductPage;
