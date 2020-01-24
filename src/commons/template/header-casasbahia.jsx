import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import Row from '../layout/row'
import Grid from '../layout/grid'

import LogoCasasBahia from '../../commons/assets/cb/logo-casasbahia.svg'
import IconCart from '../../commons/assets/cb/ic-cart.svg'
import IconProfile from '../../commons/assets/cb/ic-profile.svg'
import IconSearch from '../../commons/assets/cb/ic-search.svg'

import Rect from '../../commons/assets/rect.svg'

export default class Header extends React.Component {
  buscaTrigger(e) {
    document.querySelector("#busca").classList.toggle('is-visible')
  }

  render() {
    const Header = styled.header`
      background-color: #0061b0;
      font-size: .750rem;
    `

    const Logo = styled.h1`
      svg {
        height: 35px;
        width: auto;
      
        @media (min-width: 768px) {
          height: 50px;
          width: auto;
        }
      }

    `

    const Search = styled.div`
      display: none;

      &.is-visible {
        display: flex;
      }

      input {
        background-color: #fff;
        border: 1px solid #c0c0c0;
        border-radius: 4px;
        font-size: .875rem;
        height: 50px;
        width: 100%;

        &::placeholder {
          opacity: .7;
        }

        @media (min-width: 400px) {
          min-width: 300px;
        }
      }

      button.search-button {
        background-color: transparent;
        border: none;
        height: 100%;
        position: absolute;
        right: 0;
        width: 50px;
      
        svg {
          height: 22px;
          width: 22px;
        }
      }
    `

    const SearchTrigger = styled.span`
      cursor: pointer;

      svg {
        height: 23px;
        width: auto;

        path {
          fill: #fff;
        }
      }
    `

    const Profile = styled.a`
      color: #fff;

      svg {
        height: 28px;
        width: auto;
      }

      .profile-highlight {
        color: yellow;
        display: block;
      }
    `

    const Cart = styled.a`
      color: #fff;
      font-weight: 700;

      svg {
        height: 28px;
        width: auto;
      }
    `

    const AutoComplete = styled.div`
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 5px 7px rgba(0, 0, 0, .21);
      top: 100%;
      width: 100%;

      h4 {
        color: #0056A4;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.5;
        padding: 0 1rem;
      }

      ul {
        margin-bottom: 0;
      }

      .suggestions {
        padding: 1rem 0;

        li {
          font-size: 1rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          padding: 0 1rem;
        }

        &.suggestions-numbered {}

        .suggestion-number {
          background-color: #F3F3F3;
          border-radius: 4px;
          font-size: .875rem;
          font-weight: 800;
          text-align: center;
          line-height: 1.75;
          margin-right: 1rem;
          min-width: 2.286em;
        }

        .suggestion-searched {
          font-weight: 800;
        }
      }

      .products {
        padding: 0 .5rem 1rem;

        h4 {
          font-size: 1rem;
          padding: 0 .5rem;
        }

        li {
          margin-bottom: 1rem;
          padding: 0 .5rem;

          @media (min-width: 992px) {
            width: 33.333%;
          }

          &:last-child {
            margin-bottom: 0;
          }

          svg {
            height: 82px;
            margin-right: 1rem;
            width: 82px;
          }
          
          .product-name {
            max-height: 4.5rem;
            font-size: .75rem;
            margin-bottom: .5rem;
            overflow: hidden;
          }

          .product-price-from {
            text-decoration: line-through;
          }

          .product-price-for {
            color: #0056A4;
            font-size: 1rem;
            font-weight: 800;
          }
        }
        
      }
    `

    return (
      <Header>
        <div className="container py-2">
          <Row>
            <Grid cols="12">
              <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center">
                <Logo className="mr-md-5 order-0 order-md-0">
                  <a href="/">
                    <ReactSVG src={LogoCasasBahia} wrapper="span" />
                  </a>
                </Logo>
                <div className="d-flex align-items-center order-1 order-md-2">
                  <SearchTrigger className="mr-3 d-md-none" onClick={this.buscaTrigger}><ReactSVG src={IconSearch} /></SearchTrigger>
                  <Profile className="mx-3 ml-md-5" href="/" title="Perfil do usuário - Meus pedidos"><ReactSVG src={IconProfile} /></Profile>
                  <Cart className="ml-3" href="/" title="Carrinho"><ReactSVG src={IconCart} /></Cart>
                </div>
                <Search id="busca" className="position-relative d-md-flex flex-grow-1 order-2 order-md-1 mt-2 mt-md-0">
                  <input type="text" placeholder="O que você procura?" className="flex-grow-1 px-3" />
                  <button className="search-button"><ReactSVG src={IconSearch} /></button>
                  <AutoComplete className="position-absolute">
                    <div className="suggestions suggestions-numbered">
                      <h4>Termos mais buscados</h4>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-center"><span className="suggestion-number">1</span>iPhone</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">2</span>Xiaomi</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">3</span>Lava e seca</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">4</span>Armário de cozinha</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">5</span>Geladeira</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">6</span>iPhone</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">7</span>Xiaomi</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">8</span>Lava e seca</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">9</span>Armário de cozinha</li>
                        <li className="d-flex align-items-center"><span className="suggestion-number">10</span>Geladeira</li>
                      </ul>
                    </div>
                    <div className="suggestions suggestions-numbered">
                      <ul className="list-unstyled">
                        <li><span className="suggestion-searched">termo</span></li>
                        <li><span className="suggestion-searched">termo</span> sufixo</li>
                        <li>prefixo <span className="suggestion-searched">termo</span> sufixo</li>
                        <li>prefixo <span className="suggestion-searched">termo</span></li>
                      </ul>
                    </div>
                    <div className="products">
                      <h4>Produtos sugeridos</h4>
                      <ul className="list-unstyled d-flex flex-column flex-lg-row justify-content-between">
                        <li className="d-flex">
                          <ReactSVG src={Rect} />
                          <div className="d-flex flex-column">
                            <span className="product-name">Smartphone Samsung Galaxy A10 Azul 32GB, Tela Infinita de 6.2", Câmera Traseira 13MP, Dual Chip, Android 9.0 e Processador Octa-Core</span>
                            <span className="product-price-from">R$ 9.999,00</span>
                            <span className="product-price-for">R$ 6.666,00</span>
                          </div>
                        </li>
                        <li className="d-flex">
                          <ReactSVG src={Rect} />
                          <div className="d-flex flex-column">
                            <span className="product-name">Smartphone Samsung Galaxy A10 Azul 32GB, Tela Infinita de 6.2", Câmera Traseira 13MP, Dual Chip, Android 9.0 e Processador Octa-Core</span>
                            <span className="product-price-from">R$ 9.999,00</span>
                            <span className="product-price-for">R$ 6.666,00</span>
                          </div>
                        </li>
                        <li className="d-flex">
                          <ReactSVG src={Rect} />
                          <div className="d-flex flex-column">
                            <span className="product-name">Smartphone Samsung Galaxy A10 Azul 32GB, Tela Infinita de 6.2", Câmera Traseira 13MP, Dual Chip, Android 9.0 e Processador Octa-Core</span>
                            <span className="product-price-from">R$ 9.999,00</span>
                            <span className="product-price-for">R$ 6.666,00</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </AutoComplete>
                </Search>
              </div>
            </Grid>
          </Row>
        </div>
      </Header>
    )
  }
}