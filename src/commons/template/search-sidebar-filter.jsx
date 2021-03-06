import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import If from '../operator/if'
import IconMinus from '../assets/ic-minus.svg'
import IconPlus from '../assets/ic-plus.svg'
import IconCheck from '../assets/ic-check.svg'

export default class SearchSidebarFilter extends React.Component {
  constructor() {
    super()
    this.handleToggleShowAll = this.handleToggleShowAll.bind(this)
    this.handleToggleCollapse = this.handleToggleCollapse.bind(this)
    this.state = {
      isShowAll: false,
      isCollapsed: false,
    }
  }
  
  handleToggleShowAll() {
    this.setState({isShowAll: !this.state.isShowAll})
  }
  
  handleToggleCollapse() {
    this.setState({isCollapsed: !this.state.isCollapsed})
  }

  render() {
    const Filter = styled.div`
      border-bottom: 1px solid #E7E7E7;
      padding-bottom: .875rem;
      margin-bottom: 1rem;
      position: relative;

      input[type="text"] {
        margin-bottom: 1rem;
      }

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

      .filter-container {
        &.is-collapsed {
          display: none;
        }
      }

      .filter-more {
        color: var(--primaryColor);
        cursor: pointer;
        display: block;
        font-weight: 700;
        padding: 4px 10px;
        text-align: center;
        text-decoration: none;
      }

      .filter-counter {
        color: var(--primaryColor);
      }
    `

    
    const List = styled.ul`
      &:not(.is-show-all) li:nth-child(n+6) {
        display: none;
      }
    `

    const ColorList = styled.ul`
      margin-left: -.25rem;
      margin-right: -.25rem;
      
      &:not(.is-show-all) li:nth-child(n+7) {
        display: none;
      }
    `

    const ListItem = styled.li`
      cursor: pointer;

      input[type="checkbox"] {
        display: none;
      }

      input[type="checkbox"] + label {
        padding-left: 1.833em;
        position: relative;
      }

      input[type="checkbox"] + label::before {
        content: '';
        border: 1px solid #CACACA;
        border-radius: var(--borderRadius);
        display: block;
        height: 1.333em;
        left: 0;
        position: absolute;
        top: .083em;
        width: 1.333em;
      }

      input[type="checkbox"]:checked + label::after {
        background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 13'%3E%3Cpath fill='%2370A400' d='M16 2.395c0 .258-.103.516-.289.702l-8.877 8.877a1.001 1.001 0 01-1.404 0L.289 6.834a1.001 1.001 0 010-1.404l1.404-1.404a1.001 1.001 0 011.404 0L6.132 7.07 12.903.289a1.001 1.001 0 011.404 0l1.404 1.404c.186.186.289.444.289.702z'/%3E%3C/svg%3E") center no-repeat;
        content: '';
        height: .833em;
        left: .167em;
        position: absolute;
        top: .417em;
        width: 1em;
      }
    `

    const ColorItem = styled.li`
      font-size: 1rem;
      width: calc(100% / 6);
      margin-bottom: .25rem!important;
      padding-left: .25rem;
      padding-right: .25rem;

      button {
        background-color: ${props => props.hex};
        border: 1px solid #DBDBDB;
        border-radius: var(--borderRadius);
        padding-top: 87.5%;
        position: relative;
        width: 100%;

        & > span {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
        }
      }

      svg {
        height: auto;
        stroke: var(--textColor);
        stroke-width: 1;
        width: 50%;

        path {
          fill: #fff;
        }
      }
    `

    return (
      <Filter>
        <span className="title">{this.props.name}</span>
        <ReactSVG src={this.state.isCollapsed ? IconPlus : IconMinus} wrapper="span" className="filter-toggle" onClick={this.handleToggleCollapse} />
        <div id="filterContent" className={'filter-container' + (this.state.isCollapsed ? ' is-collapsed' : '')}>
          <If test={this.props.type === 'list'}>
            <input type="text" className="form-control form-control-sm" placeholder={'Buscar por ' + this.props.name.toLowerCase()} />
            <List className={'list-unstyled' + (this.state.isShowAll ? ' is-show-all' : '')}>
              <ListItem>
                <input type="checkbox" id="customCheck1" />
                <label htmlFor="customCheck1">Samsung <span className="filter-counter">(1.879)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck2" />
                <label htmlFor="customCheck2">Motorola <span className="filter-counter">(179)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck1" />
                <label htmlFor="customCheck1">Samsung <span className="filter-counter">(1.879)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck2" />
                <label htmlFor="customCheck2">Motorola <span className="filter-counter">(179)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck1" />
                <label htmlFor="customCheck1">Samsung <span className="filter-counter">(1.879)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck2" />
                <label htmlFor="customCheck2">Motorola <span className="filter-counter">(179)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck1" />
                <label htmlFor="customCheck1">Samsung <span className="filter-counter">(1.879)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck2" />
                <label htmlFor="customCheck2">Motorola <span className="filter-counter">(179)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck1" />
                <label htmlFor="customCheck1">Samsung <span className="filter-counter">(1.879)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck2" />
                <label htmlFor="customCheck2">Motorola <span className="filter-counter">(179)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck1" />
                <label htmlFor="customCheck1">Samsung <span className="filter-counter">(1.879)</span></label>
              </ListItem>
              <ListItem>
                <input type="checkbox" id="customCheck2" />
                <label htmlFor="customCheck2">Motorola <span className="filter-counter">(179)</span></label>
              </ListItem>
            </List>
            <span className="filter-more" onClick={this.handleToggleShowAll}>{this.state.isShowAll ? 'Ver menos' : 'Ver mais'}</span>
          </If>
          <If test={this.props.type === 'color'}>
            <ColorList className={'list-unstyled d-flex flex-wrap' + (this.state.isShowAll ? ' is-show-all' : '')}>
              <ColorItem hex="#f00"><button><If test={true}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#0f0"><button><If test={false}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#00f"><button><If test={true}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#0ff"><button><If test={false}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#f0f"><button><If test={false}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#ff0"><button><If test={false}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#000"><button><If test={true}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#fff"><button><If test={false}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#f0000f"><button><If test={true}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#0f00f0"><button><If test={false}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#0f000f"><button><If test={true}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
              <ColorItem hex="#f000f0"><button><If test={false}><ReactSVG src={IconCheck} wrapper="span" /></If></button></ColorItem>
            </ColorList>
            <span className="filter-more" onClick={this.handleToggleShowAll}>{this.state.isShowAll ? 'Ver menos' : 'Ver mais'}</span>
          </If>
        </div>
      </Filter>
    )
  }
}
