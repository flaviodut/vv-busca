import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import FilterSelected from './search-sidebar-filterselected'
import Filter from './search-sidebar-filter'
import IconTrash from '../assets/ic-trash.svg'
import IconAngleLeft from '../assets/ic-angle-left.svg'

export default class SearchSidebar extends React.Component {
  constructor() {
    super()
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.wrapperRef = React.createRef()
  }

  handleToggleVisibility() {
    const wrapper = this.wrapperRef.current
    wrapper.classList.toggle('is-visible')
  }

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
      
      .btn-filter {
        background-color: #31B348;
        border-color: #31B348;
        color: #fff;
        font-size: .688rem;
        text-transform: uppercase;
      }
    `

    const FilterContent = styled.div`
      background-color: #fff;
      height: 100vh;
      left: -100vw;
      overflow-y: auto;
      overflow-x: hidden;
      opacity: 0;
      padding: 38px 1rem 40px;
      position: fixed;
      transition: all 300ms ease-in-out;
      top: 0;
      width: 100vw;
      z-index: 1010;

      @media (min-width: 576px) {
        background-color: transparent;
        height: auto;
        overflow-y: hidden;
        opacity: initial;
        padding: 0;
        position: initial;
        width: auto;
      }

      &.is-visible {
        left: 0;
        opacity: 1;
      }

      .filter-mobile-header {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;

        > span {
          display: flex;
          align-items: center;
        }

        .title {
          color: #0056A4;
          font-size: 1rem;
          font-weight: 800;
        }
      }

      .btn-back {
        background-color: #0057A4;
        border-color: #0057A4;
        border-radius: 0;
        color: #fff;
        cursor: pointer;
        font-size: .75rem;
        height: 38px;
        left: 0;
        padding-left: 1rem;
        padding-right: 1rem;
        position: absolute;
        text-align: left;
        top: 0;
        width: 101%;
        z-index: 1015;

        svg {
          height: 1em;
          margin-right: .5rem;
          vertical-align: text-top;
          width: 1em;

          path {
            fill: #fff;
          }
        }
      }
      
      .btn-apply {
        background-color: #27B542;
        border-color: #27B542;
        border-radius: 0;
        bottom: 0;
        color: #fff;
        cursor: pointer;
        font-size: .75rem;
        font-weight: 700;
        height: 40px;
        left: 0;
        padding-left: 1rem;
        padding-right: 1rem;
        position: fixed;
        text-align: center;
        text-transform: uppercase;
        width: 100%;
        z-index: 1015;
      }

      .btn-clean {
        align-items: center;
        color: #0056A4;
        cursor: pointer;
        display: flex;

        :before {
          content: '|';
          color: var(--textColor);
          margin: 0 .875rem;
        }

        svg {
          height: 1em;
          margin-right: .5rem;
          vertical-align: -1px;
          width: 1em;

          path {
            fill: #0056A4;
          }
        }
      }
    `

    return (
      <FilterWrapper>
        <div className="d-sm-none text-right">
          <button className="btn btn-filter" onClick={() => this.handleToggleVisibility()}>Filtrar (0)</button>
        </div>
        <FilterContent ref={this.wrapperRef}>
          <div className="d-sm-none filter-mobile-header">
            <span className="title">Filtrar</span>
            <span><b>0</b>&nbsp;selecionado(s)<span className="btn-clean"><ReactSVG src={IconTrash} wrapper="span" />Limpar</span></span>
            <button className="btn btn-sm btn-back" onClick={() => this.handleToggleVisibility()}><ReactSVG src={IconAngleLeft} wrapper="span" />Voltar</button>
            <button className="btn btn-sm btn-apply is-active" onClick={() => this.handleToggleVisibility()}>Aplicar filtros</button>
          </div>
          <FilterSelected />
          <Filter name="Categoria" type="list" />
          <Filter name="Preço" type="list" />
          <Filter name="Cores" type="color" />
          <Filter name="Marca" type="list" />
        </FilterContent>
      </FilterWrapper>
    )
  }
}