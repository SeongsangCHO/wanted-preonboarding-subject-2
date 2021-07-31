import React, { Component } from "react";
import Navbar from "../Navbar";
import { Container } from "./style";

class Header extends Component {
  render() {
    return (
      <Container>
        <Navbar></Navbar>
      </Container>
    );
  }
}

export default Header;
