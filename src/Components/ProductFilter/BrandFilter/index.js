import React, { Component } from "react";
import { BrandList, BrnadItem, Container } from "./style";

class BrandFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectBrand, brand, selectedBrand } = this.props;
    return (
      <Container>
        <BrandList>
          <BrnadItem
            data-kind='ALL'
            onClick={selectBrand}
            isSelected={!selectedBrand.length}
          >
            전체
          </BrnadItem>
          {brand.map((brandTitle) => {
            return (
              <BrnadItem
                data-kind={brandTitle}
                onClick={selectBrand}
                value={brandTitle}
                isSelected={selectedBrand.includes(brandTitle)}
                key={brandTitle}
              >
                {brandTitle}
              </BrnadItem>
            );
          })}
        </BrandList>
      </Container>
    );
  }
}

export default BrandFilter;
