import React from 'react'
import styled from 'styled-components'

import Filter from './search-sidebar-filter'

export default class SearchSidebar extends React.Component {
  render() {
    const FilterWrapper = styled.div`
      font-size: .75rem;

      .title {
        color: var(--primaryColor);
        font-size: 1rem;
        font-weight: 800;
      }

      ul {
        margin-bottom: 0;
      }

      li {
        position: relative;

        button {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    `

    return (
      <FilterWrapper>
        <span className="title">Filtros selecionados</span>
        <ul className="list-unstyled">
          <li>
            <span>Categoria:</span> Capas para celulares
            <button type="button" className="close" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
          </li>
          <li>
            <span>Preço:</span> R$ 210 a R$ 560
            <button type="button" className="close" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
          </li>
          <li>
            <span>Cor:</span> Preto
            <button type="button" className="close" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
          </li>
        </ul>
        <button type="button" className="btn btn-block btn-primary">Limpar filtros</button>

        <Filter name="Categoria" />
        <Filter name="Preço" />
        <Filter name="Marca" />
      </FilterWrapper>
    )
  }
}