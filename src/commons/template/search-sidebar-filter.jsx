import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import IconMinus from '../assets/ic-minus.svg'
import IconPlus from '../assets/ic-plus.svg'

export default class SearchSidebarFilter extends React.Component {
  render() {
    const Filter = styled.div`
      border-bottom: 1px solid #E7E7E7;
      padding-bottom: .875rem;
      margin-bottom: 1rem;
      position: relative;

      .title {
        display: block;
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: .3rem;
      }

      .filter-toggle {
        cursor: pointer;
        font-weight: 800;
        position: absolute;
        right: .25rem;
        padding: 0 .5rem;
        text-decoration: none;
        top: 2px;

        svg {
          width: 10px;
          height: 10px;

          rect {
            fill: var(--primaryColor);
          }
        }
      }

      .filter-more {
        color: var(--primaryColor);
        display: block;
        font-weight: 700;
        padding: 4px 10px;
        text-align: center;
        text-decoration: none;
      }
    `

    return (
      <Filter>
        <span className="title">{this.props.name}</span>
        <ReactSVG src={IconPlus} wrapper="span" className="filter-toggle" />
        <input type="text" className="form-control form-control-sm" placeholder={'Buscar por ' + this.props.name.toLowerCase()} />
        <ul className="list-unstyled">
          <li>
            <input type="checkbox" id="customCheck2" />
            <label htmlFor="customCheck2">Olha só, esse checkbox personalizado</label>
          </li>
        </ul>
        <a href="/" className="filter-more">Ver mais</a>
      </Filter>
    )
  }
}