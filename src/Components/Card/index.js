import React from "react";
import {
  ItemContainer,
  ItemWrapper,
  ItemTitle,
  ItemInfo,
  Button,
} from "./style";
import { toggleInteresting } from "../../Utils/Hooks/updateRecentList";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {};

  render() {
    const { title, price, isInteresting, id } = this.props.data;
    const { goToProduct } = this.props;
    return (
      <ItemContainer>
        <ItemWrapper onClick={() => goToProduct(id)}>
          <ItemTitle>
            <p>{title}</p>
          </ItemTitle>
          <ItemInfo>
            <p>{`${price.toLocaleString()}원`}</p>
          </ItemInfo>
        </ItemWrapper>
        <Button isInteresting={false} onClick={this.handleClick}>
          {isInteresting ? (
            <span onClick={toggleInteresting}>관심없음 등록</span>
          ) : (
            <span>관심없는 상태 *ㅅ*</span>
          )}
        </Button>
      </ItemContainer>
    );
  }
}

export default Card;
