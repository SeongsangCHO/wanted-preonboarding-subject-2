import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { Container } from "../../Components/Header/style";
import { randomNumber } from "../../Utils/Hooks/randomNumber";
// const BASE_URL = "http://localhost:3001";

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
    const fetchApiData = await fetch(`/MockData/data.json`);
    const apiData = await fetchApiData.json();
    this.setState({
      printableData: [
        ...apiData.map((data, index) => ({
          ...data,
          isInteresting: true,
          id: index + 1,
        })),
      ],
    });
  };

  async componentDidMount() {
    const localData = await this.getLocalStorageData("printableLocalData");
    if (localStorage.getItem("printableLocalData") === null) {
      const fetchApiData = await fetch(`/MockData/data.json`);
      const apiData = await fetchApiData.json();

      this.setState({
        printableData: [
          ...apiData.map((data, index) => ({
            ...data,
            isInteresting: true,
            id: index + 1,
          })),
        ],
      });
      this.setLocalStorageData("printableLocalData", this.state.printableData);
    } else if (localData.length === 0) {
    } else {
      this.setState({
        printableData: [...localData],
      });
    }

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
  }

  componentDidUpdate() {
    if (!this.state.printableData.length) {
      this.props.history.push(`/recentList`);
    }
  }

  componentWillUnmount() {
    this.setLocalStorageData("printableLocalData", this.state.printableData);
  }

  render() {
    const { printableData, currentTitle } = this.state;
    return (
      <Container>
        <Header number={printableData.length} />
        {printableData.length === 0 ? (
          <div>너가 다 관심없다 해따 가서 지워와~</div>
        ) : (
          <div>
            {currentTitle}
            <button
              disabled={printableData.length === 1 ? true : false}
              onClick={() => this.randomPicker()}
            >
              돌려돌려!
            </button>
            <button onClick={() => this.noInteresting()}>관심없어</button>
          </div>
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
