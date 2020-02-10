import React from 'react'
import styled from 'styled-components'

import Row from '../layout/row'
import Grid from '../layout/grid'
import SearchControls from './search-controls'
import ProductCard from './product-card'

const products = [
  {name: 'Notebook Samsung Core i3-7020U 4GB 1TB Tela Full HD 15.6” Windows 10 Essentials E30 NP350XAA-KF3BR', isAvailable: true},
  {name: 'Forno de Micro-ondas Electrolux MTO30 - 20L - Branco', isAvailable: true},
  {name: 'Smartphone Samsung Galaxy A10 Preto 32GB, Tela Infinita de 6.2", Câmera Traseira 13MP, Dual Chip, Android 9.0 e Processador Octa-Core', isAvailable: true},
  {name: 'Lavadora de Roupas Consul 11Kg CWH11AB com Dosagem Extra Econômica – Branca', isAvailable: false},
  {name: 'Ventilador de Mesa Arno Ultra Silence Force VU40 com 3 Velocidades - Preto', isAvailable: false}
]

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
          {products.map((value, index) => {
            return <ProductCard product={value} key={index} />
          })}
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