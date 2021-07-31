import React, { Component } from "react";
import PropTypes from "prop-types";
import OrderFilterModal from "../../../Modals/OrderFilterModal";
import { OrderFilterButton } from "./style";

class OrderFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <OrderFilterButton onClick={this.openModal}>
          {this.props.value === "recentOrder" ? "최신순" : "최저가순"}
        </OrderFilterButton>
        {this.state.open && (
          <OrderFilterModal
            selectValue={this.props.selectedOrderedKind}
            close={this.closeModal}
          />
        )}
      </>
    );
  }
}

OrderFilter.propTypes = {};

export default OrderFilter;
