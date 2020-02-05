import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import Rating from './rating'
import IconYoutube from '../assets/ic-youtube.svg'

export default class ProductCard extends React.Component {
  constructor() {
    super()
    this.name = 'Notebook Samsung Core i3-7020U 4GB 1TB Tela Full HD 15.6” Windows 10 Essentials E30 NP350XAA-KF3BR'
    this.state = {
      isAvailable: true,
    }
    // this.getName = this.getName.bind(this)
  }
  
  // getName(str) {
  //   if (str.length > 75) {
  //     return str.substr(0, 75) + '…'
  //   }
    
  //   return str
  // }

  render() {
    const ProductCard = styled.li`
      font-size: .75rem;
      margin-bottom: 40px;
      position: relative;

      @media (min-width: 992px) {
        font-size: .875rem;
      }

      img {
        display: inline-block;
        height: auto;
        width: 100%;
      }

      a {
        text-decoration: none;
      }

      .product-container {
        border: 1px solid transparent;
        border-radius: var(--borderRadius);
        display: flex;
        flex-direction: row;
        padding: 1rem;
        position: relative;
        transition: border 250ms ease-in-out;

        @media (min-width: 992px) {
          flex-direction: column;
        }

        :hover {
          border-color: #ccc;
        }
      }

      .product-badges {
        display: flex;
        flex-direction: column;
        left: 1.5rem;
        position: absolute;
        top: 1.5rem;

        span {
          margin-bottom: .25rem;

          :last-of-type {
            margin-bottom: 0;
          }
        }

        .product-badges-discount {
          align-items: center;
          background-color: #FFB259;
          border-radius: var(--borderRadius);
          color: #fff;
          display: flex;
          font-size: 1rem;
          font-weight: 700;
          height: 30px;
          justify-content: center;
          width: 50px;
        }
      }

      .product-controls {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: calc(.5rem + 15px);
        top: .5rem;

        > span {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        .product-controls-favorite {
          background-color: #F7D8D9;
          height: 28px;
          width: 28px;
          border-radius: var(--borderRadius);
        }
      }

      .product-image {
        margin-right: 1rem;

        @media (min-width: 992px) {
          margin-bottom: 1rem;
          margin-right: 0;
        }
      }

      .product-description {}

      .product-name {
        margin-bottom: .5rem;
        max-height: 4.5em;
        overflow: hidden;
      }

      .product-flags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: -.25rem;
        margin-right: -.25rem;
        
        span {
          align-items: center;
          background-color: #C8D001;
          border-radius: var(--borderRadius);
          color: #fff;
          display: flex;
          font-size: .688rem;
          font-weight: 700;
          height: 18px;
          justify-content: center;
          margin-bottom: .5rem;
          margin-left: .25rem;
          margin-right: .25rem;
          width: 97px;
        }

        span:nth-child(2) {
          background-color: #EC7700;
        }

        span:nth-child(3) {
          background-color: #592C82;
        }
      }

      .product-rating {
        margin-bottom: .5rem;
      }

      .product-price > span {
        display: block;
      }

      .product-price-from {
        font-size: .75rem;
        text-decoration: line-through;

        .product-price-prefix {
          text-transform: lowercase;
        }
      }

      .product-price-for {
        color: var(--primaryColor);
        font-size: .875rem;
        font-weight: 700;

        @media (min-width: 992px) {
          font-size: 1.125rem;
        }

        .product-price-prefix {
          font-size: .75rem;
          font-weight: 400;
          text-transform: lowercase;

          @media (min-width: 992px) {
            font-size: 1rem;
          }
        }
      }

      .product-price-installment {
        color: var(--primaryColor);
        font-size: .75rem;

        @media (min-width: 992px) {
          font-size: 1rem;
        }

        span {
          font-weight: 700;
        }
      }

      button {
        margin-top: .5rem;
        
        &.btn-play {
          align-items: center;
          background-color: #BC0406;
          color: #fff;
          display: flex;
          font-size: .688rem;
          padding-bottom: 0;
          padding-top: 0;

          :hover {
            background-color: #C6292B;
          }

          .btn-play-icon {
            margin-right: .375rem;
          }

          svg {
            height: 13px;
            vertical-align: text-bottom;
            width: 13px;

            path {
              fill: #fff;
            }
          }
        }
      }

    `

    return (
      <ProductCard itemScope itemType="http://schema.org/Product">
        <div className="product-container">
          <div className="product-badges">
            <span className="product-badges-discount">-18%</span>
          </div>
          {/* <div className="product-controls">
            <span className="product-controls-favorite">F</span>
          </div> */}
          <div className="product-image">
            <a href="/" title="Nome do produto" itemProp="url">
              <img itemProp="image" src="//placehold.it/292x292" alt="Nome do produto" />
            </a>
          </div>
          <div className="product-description">
            <a href="/" title="Nome do produto">
              <p className="product-name" itemProp="name">{this.name}</p>
              <div className="product-flags">
                <span>Frete grátis</span>
                <span>Frete grátis</span>
                <span>Frete grátis</span>
              </div>
              <Rating />
              <div className="product-price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <span className="product-price-from"><span className="product-price-prefix">De</span> R$ 1.111,00</span>
                <meta itemProp="priceCurrency" content="BRL" />
                <span className="product-price-for" itemProp="price" content="1.000,00"><span className="product-price-prefix">Por</span> R$ 1.000,00</span>
                <span className="product-price-installment">12x de <span>R$ 100,00</span></span>
                <link itemProp="availability" href={'http://schema.org/' + (this.state.isAvailable ? 'InStock' : 'OutOfStock')} />
              </div>
            </a>
            <button className="btn-play btn"><ReactSVG src={IconYoutube} wrapper="span" className="btn-play-icon" />Assista ao vídeo</button>
            {/* <button className="product-buy btn btn-block btn-light">Comprar</button> */}
          </div>
        </div>
      </ProductCard>
    )
  }
}