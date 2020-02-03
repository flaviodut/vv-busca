import React from 'react'
import styled from 'styled-components'

import SearchProductCard from './product-card'
import SearchProductControl from './search-controls'

export default class SearchGrid extends React.Component {
  render() {
    const Grid = styled.ul`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: -15px;
      margin-right: -15px;

      li {
        padding: 0 15px;
        width: 50%;

        @media (min-width: 992px) {
          width: 33.33333%;
        }
      }
    `

    return (
      <div>
        <SearchProductControl />
        <Grid className="list-unstyled">
          <SearchProductCard />
          <SearchProductCard />
          <SearchProductCard />
          <SearchProductCard />
          <SearchProductCard />
        </Grid>
      </div>
    )
  }
}