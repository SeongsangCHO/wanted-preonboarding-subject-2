import React from "react";
import { ItemWrapper, ItemTitle, ItemInfo, Button } from "./style";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, price } = this.props.data;
    return (
      <ItemWrapper>
        <ItemTitle>
          <p>{title}</p>
        </ItemTitle>
        <ItemInfo>
          <Button isHasInteresting={false}>
            <span>관심없음등록*ㅅ*</span>
          </Button>
          <p>{`${price.toLocaleString()}원`}</p>
        </ItemInfo>
      </ItemWrapper>
    );
  }
}

export default Card;
