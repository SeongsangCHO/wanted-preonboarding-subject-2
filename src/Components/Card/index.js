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

  isOpenCautionMessage=(isInteresting)=>{
    this.props.goToProduct(isInteresting);
  };

  render() {
    const { title, price, isInteresting } = this.props.data;    
    return (
      <ItemContainer>
        <ItemWrapper onClick={()=>this.isOpenCautionMessage(isInteresting)}>
          <ItemTitle>
            <p>{title}</p>
          </ItemTitle>
          <ItemInfo>
            <p>{`${price.toLocaleString()}원`}</p>
          </ItemInfo>
        </ItemWrapper>
        <Button isHasInteresting={isInteresting} onClick={this.handleClick}>
          {isInteresting ? (
            <span>관심없음 등록</span>
          ) : (
            <span>관심없는 상태 *ㅅ*</span>
          )}
        </Button>
      </ItemContainer>
    );
  }
}

export default Card;
