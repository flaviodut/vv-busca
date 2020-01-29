import React from 'react'
import styled from 'styled-components'

import SearchProductCard from './search-product-card'

export default class SearchProductsGrid extends React.Component {
  render() {
    const ProductsGrid = styled.ul`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: -15px;
      margin-right: -15px;

      li {
        padding: 0 15px;
        width: 25%;
      }
    `

    return (
      <div>
        controles
        <ProductsGrid className="list-unstyled">
          <SearchProductCard />
          <SearchProductCard />
          <SearchProductCard />
          <SearchProductCard />
          <SearchProductCard />
        </ProductsGrid>
      </div>
    )
  }
}