import React from "react";
import {
  ItemContainer,
  ItemWrapper,
  ItemTitle,
  ItemInfo,
  Button,
} from "./style";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {};

  render() {
    const { title, price } = this.props.data;
    const { goToProduct } = this.props;
    return (
      <ItemContainer>
        <ItemWrapper onClick={goToProduct}>
          <ItemTitle>
            <p>{title}</p>
          </ItemTitle>
          <ItemInfo>
            <p>{`${price.toLocaleString()}원`}</p>
          </ItemInfo>
        </ItemWrapper>
        <Button isHasInteresting={false} onClick={this.handleClick}>
          <span>관심없음등록*ㅅ*</span>
        </Button>
      </ItemContainer>
    );
  }
}

export default Card;
