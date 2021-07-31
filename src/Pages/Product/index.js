import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { Container } from "../../Components/Header/style";
const BASE_URL = "http://localhost:3001";

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
      console.log(localData, "lcocoocco");

      this.setState({
        printableData: [
          ...apiData.map((data) => ({ ...data, isInteresting: true })),
        ],
      });
      this.setLocalStorageData("printableLocalData", this.state.printableData);
    } else if (localData.length === 0) {
    } else {
      console.log(localData);
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
    const { printableData, currentTitle } = this.state;
    return (
      <Container>
        <Header></Header>
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
