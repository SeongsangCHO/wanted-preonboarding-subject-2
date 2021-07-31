import React, { Component} from "react";
import PropTypes from "prop-types";
import OrderFilterModal from "../../../Modals/OrderFilterModal"
import {OrderFilterButton} from "./style"
class OrderFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value:"최신순",
      open:false,
    }
  }

  openModal = () => {
    this.setState({open:true});
  }

  closeModal = () => {
    this.setState({open:false});
  }
  
  selectValue = (selectValue) =>{
    if (selectValue === "recentOrder") {
      this.setState({value: "최신순"})
    }else this.setState({value: "최저가순"});
    
  }

  render() {
    return (
      <>
        <OrderFilterButton onClick={this.openModal}>⥯ {this.state.value}</OrderFilterButton>
        {this.state.open && <OrderFilterModal selectValue={this.selectValue} close={this.closeModal}/> }
      </>
    )
  }
}

OrderFilter.propTypes = {};

export default OrderFilter;