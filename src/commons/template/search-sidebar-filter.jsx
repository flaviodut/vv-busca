import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import IconDash from '../assets/cb/ic-dash.svg'

export default class SearchSidebarFilter extends React.Component {
  render() {
    const Filter = styled.div`
      font-size: .75rem;
      position: relative;

      .filter-toggle {
        font-weight: 800;
        position: absolute;
        right: .25rem;
        padding: 0 .5rem;
        text-decoration: none;
        top: 2px;
      }
    `

    return (
      <Filter>
        <span className="title">{this.props.name}</span>
        <a href="/" className="filter-toggle">
          <ReactSVG src={IconDash}></ReactSVG>
        </a>
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