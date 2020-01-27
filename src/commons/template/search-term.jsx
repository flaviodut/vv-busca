import React from 'react'
import styled from 'styled-components'

export default class SearchTerm extends React.Component {
  render() {
    const Term = styled.p`
      color: var(--primaryColor);
      font-size: 2rem;
      font-weight: 800;
      margin: 2rem 0 1rem;
    `

    const Suggestions = styled.div`
      a,
      a:active {
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #575757;
        font-size: .875rem;
        margin-right: 1rem;
        padding-left: .643em;
        padding-right: .643em;
        text-decoration: none;
      }

      a:hover,
      a:focus {
        color: #6f6f6f;
        border-color: #dadada;
      }
    `

    return (
      <div>
        <Term>Samsung Galaxy</Term>
        <Suggestions>
          <span className="font-weight-bold">Sugestão de consulta:</span>
          <ul className="list-unstyled d-flex">
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
          </ul>
        </Suggestions>
      </div>
    )
  }
}