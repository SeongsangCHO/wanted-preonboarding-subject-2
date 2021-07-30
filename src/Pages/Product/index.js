import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { Container } from "../../Components/Header/style";
const BASE_URL = "http://localhost:3000";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrintData: {},
      currDataIndex: 0,
      printableData: [],
    };
  }

  handleBtnClick = (isInteresting = false) => {
    console.log(isInteresting, this.state.currDataIndex);
    const randomIndex = this.generateRandomNumber();
    this.setState({
      currentPrintData: {
        ...this.state.printableData[randomIndex],
      },
    });

    if (isInteresting === false) {
      //랜덤버튼 클릭
    } else {
      //관심없음 클릭
      console.log(this.state.currDataIndex, "이전 출력 인덱스");
      if (this.state.printableData.length === 0) {
        console.log("아 이제 데이터 없다고~");
        return;
      } else {
        console.log("관심없어");
        const filteredList = this.state.printableData.filter(
          (data) => data.title !== this.state.currentPrintData.title
        );
        console.log(filteredList);

        this.setState({
          printableData: [...filteredList],
        });
      }
    }
    //비동기적으로 처리되므로 바로 반영이 안됨.
  };

  generateRandomNumber = () => {
    if (this.state.printableData.length === 0) {
      return 0;
    }
    let randomNumber = Math.floor(
      Math.random() * this.state.printableData.length
    );
    console.log("전체데이터", this.state.printableData);

    while (randomNumber === this.state.currDataIndex) {
      randomNumber = Math.floor(
        Math.random() * this.state.printableData.length
      );
    }
    this.setState({ currDataIndex: randomNumber });
    return randomNumber;
  };

  componentDidMount = async () => {
    const fetchMockData = await fetch(`${BASE_URL}/MockData/data.json`);
    const mockData = await fetchMockData.json();
    localStorage.setItem("mockData", JSON.stringify(mockData)); //불러온 데이터 local에 set
    this.setState({ printableData: [...mockData] });
    if (mockData === null || mockData.length === 0) {
      //mockData없을 때,
      console.log("has no Mock Data");
      localStorage.setItem("mockData", []);
    } else {
      //Mock Data 있을 때,
      const randomIndex = this.generateRandomNumber();
      this.setState({
        currentPrintData: this.state.printableData[randomIndex],
        currDataIndex: randomIndex,
      });
    }
    // localStorage.setItem('watchedHistory', JSON.stringify(currentProduct));
  };

  componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {
  //   const productStateChange =
  //     this.state.currentPrintData !== nextState.currentPrintData;
  //   return productStateChange;
  // }

  componentWillUnmount() {}

  render() {
    return (
      <Container>
        <Header></Header>
        {this.state.printableData === 0 ? (
          <div>noMoreData</div>
        ) : (
          <div>
            {this.state.currentPrintData?.title}
            <button onClick={() => this.handleBtnClick(false)}>
              돌려돌려!
            </button>
            <button onClick={() => this.handleBtnClick(true)}>관심없어</button>
          </div>
        )}
      </Container>
    );
  }
}

ProductPage.propTypes = {
  productArrayLength: PropTypes.object,
};

export default ProductPage;
