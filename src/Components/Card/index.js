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
    this.state = {
      hasInteresting: this.props.data.isInteresting,
    };
  }
  handleClick = () => {
    this.setState(
      {
        hasInteresting: !this.state.hasInteresting,
      },
      () => toggleInteresting(this.props.data, this.state.hasInteresting)
    );
  };
  isOpenCautionMessage = (isInteresting) => {
    this.props.goToProduct(isInteresting);
  };

  render() {
    const { hasInteresting } = this.state;
    const { title, price, isInteresting } = this.props.data;
    const { hide } = this.props;
    return (
      <ItemContainer id='ct' className={hide && !hasInteresting ? "hide" : ""}>
        <ItemWrapper onClick={() => this.isOpenCautionMessage(isInteresting)}>
          <ItemTitle>
            <p>{title}</p>
          </ItemTitle>
          <ItemInfo>
            <p>{`${price.toLocaleString()}원`}</p>
          </ItemInfo>
        </ItemWrapper>
        <Button isInteresting={isInteresting} onClick={this.handleClick}>
          {hasInteresting ? (
            <span>관심있는 상태</span>
          ) : (
            <span>관심없는 상태 *ㅅ*</span>
          )}
        </Button>
      </ItemContainer>
    );
  }
}

export default Card;
