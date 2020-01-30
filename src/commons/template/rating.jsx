import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import IconStar from '../assets/ic-star.svg'

export default class Rating extends React.Component {
  constructor() {
    super()
    this.ratingValue = 2.5
    this.reviewCount = 15
  }

  render() {
    const stars = ['off', 'off', 'off', 'off', 'off']

    for (let i = 0; i < parseInt(this.ratingValue); i++) {
      stars[i] = 'on'
    }
    
    if (this.ratingValue % 1 === 0.5) {
      stars[parseInt(this.ratingValue)] = 'half'
    }

    const Rating = styled.span`
      display: flex;

      span {
        display: inline-block;
        height: var(--ratingSize);
      }

      & > span {
        margin-right: 6px;
        
        :last-of-type {
          margin-right: 0;
        }
      }

      svg {
        height: var(--ratingSize);
        vertical-align: top;
        width: var(--ratingSize);
      }
    `

    const getType = props => {
      switch (props.type) {
        case 'on':
          return `
            svg path:nth-child(1),
            svg path:nth-child(2) {
              fill: var(--ratingOn);
            }
          `

        case 'off':
          return `
            svg path:nth-child(1),
            svg path:nth-child(2) {
              fill: var(--ratingOff);
            }
          `

        case 'half':
          return `
            svg path:nth-child(1) {
              fill: var(--ratingOff);
            }
          
            svg path:nth-child(2) {
              fill: var(--ratingOn);
            }
          `

        default:
          return `
            svg path:nth-child(1),
            svg path:nth-child(2) {
              fill: var(--ratingOff);
            }
          `
      }
    }

    const Star = styled(ReactSVG)`
      ${(type) => getType(type)}
    `

    return (
      <Rating className="product-rating" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
        <meta itemProp="ratingValue" content={this.ratingValue} />
        <meta itemProp="reviewCount" content={this.reviewCount} />
        {stars.map((value, index) => {
          return <Star src={IconStar} wrapper="span" type={value} key={index} />
        })}
      </Rating>
    )
  }
}