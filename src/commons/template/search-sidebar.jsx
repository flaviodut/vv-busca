import React from 'react'
import styled from 'styled-components'

import FilterSelected from './search-sidebar-filterselected'
import Filter from './search-sidebar-filter'

export default class SearchSidebar extends React.Component {
  render() {

    const FilterWrapper = styled.div`
      font-size: .75rem;

      ul,
      label {
        margin-bottom: 0;
      }

      li {
        margin-bottom: .875rem;
      }
    `

    return (
      <FilterWrapper>
        <FilterSelected />
        <Filter name="Categoria" type="list" />
        <Filter name="Preço" type="list" />
        <Filter name="Cores" type="color" />
        <Filter name="Marca" type="list" />
      </FilterWrapper>
    )
  }
}