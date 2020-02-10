import React from 'react'
import styled from 'styled-components'

import Row from '../layout/row'
import Grid from '../layout/grid'
import SearchControls from './search-controls'
import ProductCard from './product-card'

export default class SearchGrid extends React.Component {
  render() {
    const GridProducts = styled.ul`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: -1rem;
      margin-right: -1rem;

      li {
        padding: 0 1rem;
        width: 100%;

        @media (min-width: 992px) {
          width: 33.33333%;
        }
      }

      `

      const LoadMore = styled.button`
        background-color: var(--buttonSecondaryColor);
        border-color: var(--buttonSecondaryColor);
        color: #fff;
        font-weight: 700;
        margin-bottom: 40px;

        :hover,
        :focus {
          background-color: var(--buttonSecondaryColorHover);
          border-color: var(--buttonSecondaryColorHover);
          color: #fff;
        }
      `

    return (
      <div>
        <SearchControls />
        <GridProducts className="list-unstyled">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </GridProducts>
        <Row addClass="justify-content-center">
          <Grid cols="12 12 8 4">
            <LoadMore className="btn btn-block">Ver mais produtos</LoadMore>
          </Grid>
        </Row>
      </div>
    )
  }
}