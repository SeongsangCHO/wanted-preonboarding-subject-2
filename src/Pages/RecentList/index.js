import React, { Component } from "react";
import Navbar from "../../Components/Navbar";

class RecentListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        recentListPage
        <Navbar></Navbar>
        <div>관심상품</div>
        <div>상품정보</div>
      </div>
    );
  }
}

RecentListPage.propTypes = {};

export default RecentListPage;
