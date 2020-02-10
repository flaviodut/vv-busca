import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import If from '../operator/if'
import Rating from './rating'
import IconYoutube from '../assets/ic-youtube.svg'

const ProductCardStyle = styled.li`
  font-size: .75rem;
  position: relative;

  @media (min-width: 992px) {
    font-size: .875rem;
    margin-bottom: 40px;
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
    border-bottom: 1px solid #E7E7E7;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    position: relative;
    transition: border 250ms ease-in-out;

    @media (min-width: 992px) {
      border: 1px solid transparent;
      border-radius: var(--borderRadius);
      flex-direction: column;
      margin-bottom: 0;
      padding: 1rem;
      
      :hover {
        border-color: #ccc;
      }
    }

  }

  .product-badges {
    display: flex;
    flex-direction: column;
    left: .5rem;
    position: absolute;
    top: .5rem;

    @media (min-width: 992px) {
      left: 1.5rem;
      top: 1.5rem;
    }

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
      font-size: .75rem;
      font-weight: 700;
      height: 20px;
      justify-content: center;
      width: 40px;

      @media (min-width: 992px) {
        font-size: 1rem;
        height: 30px;
        width: 50px;
      }
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

  .product-price{
    & > span {
      display: block;
    }

    &.is-out-of-stock {
      background-color: #f7f7f7;
      border-radius: var(--borderRadius);
      padding: .25rem .5rem;

      span {
        color: var(--primaryColor);
      }

      .product-unavailable {
        font-weight: 700;
      }

      .product-notify {}
    }
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

const ProductCard = (props) => {
  return (
    <ProductCardStyle itemScope itemType="http://schema.org/Product">
      <div className="product-container">
        <div className="product-badges">
          <span className="product-badges-discount">-18%</span>
        </div>
        {/* <div className="product-controls">
          <span className="product-controls-favorite">F</span>
        </div> */}
        <div className="product-image">
          <a href="/" title={props.product.name} itemProp="url">
            <img itemProp="image" src="//placehold.it/292x292" alt={props.product.name} />
          </a>
        </div>
        <div className="product-description">
          <a href="/" title={props.product.name}>
            <p className="product-name" itemProp="name">{props.product.name}</p>
            <div className="product-flags">
              <span>Frete grátis</span>
              <span>Frete grátis</span>
              <span>Frete grátis</span>
            </div>
            <Rating />
            <div className={'product-price' + (!props.product.isAvailable ? ' is-out-of-stock' : '')} itemProp="offers" itemScope itemType="http://schema.org/Offer">
              <If test={props.product.isAvailable}>
                <span className="product-price-from"><span className="product-price-prefix">De</span> R$ 1.111,00</span>
                <meta itemProp="priceCurrency" content="BRL" />
                <span className="product-price-for" itemProp="price" content="1.000,00"><span className="product-price-prefix">Por</span> R$ 1.000,00</span>
                <span className="product-price-installment">12x de <span>R$ 100,00</span></span>
              </If>
              <If test={!props.product.isAvailable}>
                <span className="product-unavailable">Produto indisponível no momento</span>
                <span className="product-notify">Avise-me quando chegar</span>
              </If>
              <link itemProp="availability" href={'http://schema.org/' + (props.product.isAvailable ? 'InStock' : 'OutOfStock')} />
            </div>
          </a>
          <button className="btn-play btn"><ReactSVG src={IconYoutube} wrapper="span" className="btn-play-icon" />Assista ao vídeo</button>
          {/* <button className="product-buy btn btn-block btn-light">Comprar</button> */}
        </div>
      </div>
    </ProductCardStyle>
  )
}

ProductCard.defaultProps = {
  product: {
    name: 'Nome do produto',
    isAvailable: false,
  }
}

export default ProductCard
