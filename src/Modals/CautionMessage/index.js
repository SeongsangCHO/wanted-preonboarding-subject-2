import React, { Component } from "react";
import { ModalWrapper } from "./style";

class CautionMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { open } = this.props;
    return (
      <>
        {open ? (
          <ModalWrapper>
            <span>관심없는 상품 입니다. 관심없음을 해지해 주세요</span>
          </ModalWrapper>
        ) : null}
      </>
    );
  }
}

export default CautionMessage;
