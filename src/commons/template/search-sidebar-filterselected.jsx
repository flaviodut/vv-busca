import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import IconClose from '../../commons/assets/ic-close.svg'

export default class SearchSidebarFilterSelected extends React.Component {
  render() {
    const FilterSelected = styled.div`
      margin-bottom: 1.875rem;
      
      .title {
        color: var(--primaryColor);
        display: block;
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }

      span {
        font-weight: 800;
      }

      li {
        position: relative;
      }
      
      .btn-close {
        cursor: pointer;
        display: block;
        padding: 0 4px;
        position: absolute;
        right: -4px;
        top: 0;

        svg {
          width: 8px;
          height: 8px;
        }
      }

      .btn-filter {
        background-color: var(--buttonSecondaryColor);
        border-color: var(--buttonSecondaryColor);
        color: #fff;
        font-size: .875rem;

        :hover,
        :focus {
          background-color: var(--buttonSecondaryColorHover);
          border-color: var(--buttonSecondaryColorHover);
        }
      }
    `

    return (
      <FilterSelected>
        <span className="title">Filtros selecionados</span>
        <ul className="list-unstyled">
          <li>
            <span>Categoria:</span> Capas para celulares
            <ReactSVG src={IconClose} wrapper="span" className="btn-close" />
          </li>
          <li>
            <span>Preço:</span> R$ 210 a R$ 560
            <ReactSVG src={IconClose} wrapper="span" className="btn-close" />
          </li>
          <li>
            <span>Cor:</span> Preto
            <ReactSVG src={IconClose} wrapper="span" className="btn-close" />
          </li>
        </ul>
        <button type="button" className="btn btn-block btn-filter">Limpar filtros</button>
      </FilterSelected>
    )
  }
}