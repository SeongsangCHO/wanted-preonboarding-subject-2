import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { ProductWrapper, ArrowRepeat, Button, EmptyMessageFlexBox, EmptyIcon, EmptyMessage, Brand, Title, Price } from "../Product/style";
import { Container } from "../../Components/Header/style";
import { randomNumber } from "../../Utils/Hooks/randomNumber";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../Utils/Hooks/localStorageUtil";

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
    const recentLocal = getLocalStorageData("recentList");
    if (
      recentLocal.some(
        (item) => item?.title === this.state.currentPrintData.title
      )
    ) {
      setLocalStorageData("recentList", [
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
      setLocalStorageData("recentList", [
        ...recentLocal,
        {
          ...this.state.currentPrintData,
          time: Date.now(),
          isInteresting: isInteresting,
        },
      ]);
    }
    setLocalStorageData("printableLocalData", this.state.printableData);
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
    let randomIndex = randomNumber(printableLength);
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
    this.props.history.push(`/product/${randomIndex + 1}`);
  };

  upDateState = () => {
    const targetId = parseInt(this.props.match.params.id) - 1;
    if (targetId < 0 || targetId > this.state.printableData.length) {
      alert("상품이 없습니다");
      return this.randomPicker();
    }
    this.setState(
      (prev) => ({
        currentPrintData: prev.printableData[targetId],
        currentTitle: prev.printableData[targetId].title,
        recentListData: prev.recentListData.concat(
          prev.printableData[targetId]
        ),
      }),
      () => this.setRecentListNoInterestingData(true)
    );
  };

  // getLocalStorageData = (dataName) => {
  //   const localData = localStorage.getItem(dataName);
  //   if (localData === null) {
  //     return [];
  //   }
  //   return JSON.parse(localData);
  // };

  // setLocalStorageData = (itemName, data) => {
  //   localStorage.setItem(itemName, JSON.stringify(data));
  // };

  // getApiData = async () => {
  //   const fetchApiData = await fetch(`/MockData/data.json`);
  //   const apiData = await fetchApiData.json();
  //   this.setState({
  //     printableData: [
  //       ...apiData.map((data, index) => ({
  //         ...data,
  //         isInteresting: true,
  //         id: index + 1,
  //       })),
  //     ],
  //   });
  // };

  async componentDidMount() {
    // const localData = await this.getLocalStorageData("printableLocalData");
    // if (localStorage.getItem("printableLocalData") === null) {
    //   const fetchApiData = await fetch(`/MockData/data.json`);
    //   const apiData = await fetchApiData.json();
    //   this.setState({
    //     printableData: [
    //       ...apiData.map((data, index) => ({
    //         ...data,
    //         isInteresting: true,
    //         id: index + 1,
    //       })),
    //     ],
    //   });
    //   this.setLocalStorageData("printableLocalData", this.state.printableData);
    // } else if (localData.length === 0) {
    // } else {
    //   this.setState({
    //     printableData: [...localData],
    //   });
    // }
    const productData = getLocalStorageData("printableLocalData");

    this.setState({ printableData: productData }, () => this.upDateState());
  }

  componentDidUpdate() {
    if (!this.state.printableData.length) {
      this.props.history.push(`/recentList`);
    }
  }

  componentWillUnmount() {
    setLocalStorageData("printableLocalData", this.state.printableData);
  }

  render() {
    const { printableData, currentPrintData } = this.state;
    const { price } = currentPrintData; 
    return (
      <Container>
        <Header number={printableData.length} />
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
