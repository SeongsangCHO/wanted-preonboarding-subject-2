import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ListContainer,
  ItemWrapper,
  ItemTitle,
  ItemInfo,
  Button,
} from "./style";
class RecentList extends Component {
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
    );
  }
}

RecentList.propTypes = {};

export default RecentList;
