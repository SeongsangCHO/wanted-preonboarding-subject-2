import React, { Component } from "react";
import Header from "../../Components/Header";
import BrandFilter from "../../Components/ProductFilter/BrandFilter";
import HideNoInterestingFilter from "../../Components/ProductFilter/HideNoInterestingFilter";
import OrderFilter from "../../Components/ProductFilter/OrderFilter";
import { Container, FilterOrderContainer } from "./style";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

import RecentList from "../../Components/RecentItemList";
const watchedHistory = [
  {
    title: "농담곰",
    brand: "농담곰브랜드",
    price: 2000000,
    time: 1920,
    isInteresting: false,
  },
  {
    title: "커피",
    brand: "커피브랜드",
    price: 40,
    time: 26000,
    isInteresting: true,
  },
  {
    title: "스타벅스",
    brand: "스타벅스 브랜드",
    price: 30,
    time: 2400,
    isInteresting: false,
  },
  {
    title: "샤넬",
    brand: "샤넬브랜드",
    price: 20,
    time: 2000,
    isInteresting: true,
  },
  {
    title: "구찌",
    brand: "구찌브랜드",
    price: 10,
    time: 1,
    isInteresting: false,
  },
];
class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printableHistory: [],
    };
  }

  componentWillMount() {}

  componentDidMount() {
    const localStorageWatchedHistory = JSON.parse(
      localStorage.getItem("watchedHistory")
    );
    if (localStorageWatchedHistory === null) {
      console.log("getter LocalStorage");
      // localStorage.setItem("watchedHistory", JSON.stringify(watchedHistory)); //불러온 데이터 없으면 초기화
    } else {
      //로컬에서 불러온 이력 있으면 setState
      console.log("setter LocalStorage", localStorageWatchedHistory);
    }

    this.setState({
      printableHistory: localStorageWatchedHistory || [],
    });
    if (12 !== 12) {
      console.log("12시가 지났다.");
      localStorage.setItem("watchedHistory", JSON.stringify([])); //로컬스토리지 초기화
    }
  }

  componentWillReceiveProps(nextProps) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Container>
        <Header />
        <FilterOrderContainer>
          <HideNoInterestingFilter />
          <OrderFilter />
        </FilterOrderContainer>
        <BrandFilter />
        {this.state.printableHistory.length === 0 ? (
          <div>
            <Link to='/product'>여기를 눌러 봐</Link>
          </div>
        ) : (
          <RecentList />
        )}
      </Container>
    );
  }
}

RecentListPage.propTypes = {};

export default RecentListPage;
