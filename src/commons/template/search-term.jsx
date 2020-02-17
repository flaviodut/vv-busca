import React from 'react'
import styled from 'styled-components'

import If from '../operator/if'

const Term = styled.p`
  color: var(--titleColor);
  font-size: 2rem;
  font-weight: 800;
  margin: 2rem 0 1rem;
`

const Suggestions = styled.div`
  span {
    display: block;
    margin-bottom: .5rem;
  }

  ul {
    margin: 0 -.5rem 2.5rem;
    
    li {
      margin-left: .5rem;
      margin-right: .5rem;
    }

    a,
    a:active {
      border: 1px solid #ccc;
      border-radius: 4px;
      color: #575757;
      font-size: .875rem;
      padding-left: .643em;
      padding-right: .643em;
      text-decoration: none;

    }

    a:hover,
    a:focus {
      color: #6f6f6f;
      border-color: #dadada;
    }

    &.is-highlight {
      margin: 0 -.25rem 1rem;

      li {
        margin-left: .25rem;
        margin-right: .25rem;
      }

      a,
      a:active {
        background-color: var(--primaryColor);
        border-color: var(--primaryColor);
        color: #fff;
      }

      a:hover,
      a:focus {
        background-color: var(--secondaryColor);
        border-color: var(--secondaryColor);
        color: #fff;
      }
    }

  }
  
  .suggestion-title {
    color: var(--primaryColor);
    font-size: 1.25rem;
    font-weight: 800;
    margin-top: 3rem;
  }
`

const NegativeFeedback = styled.div`
    p {
      color: var(--primaryColor);
      font-size: 1.25rem;
      margin-top: 2rem;
    }

    ul {
      font-size: .875rem;
      padding-left: 0;
    }

    li {
      list-style-position: inside;
    }
`

const SearchTerm = (props) => {
  return (
    <div>
      <If test={props.qtyProducts > 0}>
        <Term>Samsung Galaxy</Term>
        <Suggestions>
          <span className="font-weight-bold">Sugestão de consulta:</span>
          <ul className="list-unstyled d-flex flex-wrap">
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
          </ul>
        </Suggestions>
      </If>
      <If test={props.qtyProducts === 0}>
        <NegativeFeedback>
          <p><b>Ops!</b><br />Não encontramos nenhum resultado para a busca por <strong>"{'termo'}"</strong></p>
          <ul>
            <li>Verifique se a palavra foi digitada corretamente.</li>
            <li>Tente palavras menos específicas.</li>
            <li>Tente palavras-chave diferentes.</li>
            <li>Faça buscas relacionadas.</li>
          </ul>
        </NegativeFeedback>

        <Suggestions>
          <span className="suggestion-title">Buscas populares</span>
          <ul className="list-unstyled d-flex flex-wrap is-highlight">
            <li><a href="/">0-9</a></li>
            <li><a href="/">A</a></li>
            <li><a href="/">B</a></li>
            <li><a href="/">C</a></li>
            <li><a href="/">D</a></li>
            <li><a href="/">E</a></li>
            <li><a href="/">F</a></li>
            <li><a href="/">G</a></li>
            <li><a href="/">H</a></li>
            <li><a href="/">I</a></li>
            <li><a href="/">J</a></li>
            <li><a href="/">K</a></li>
            <li><a href="/">L</a></li>
            <li><a href="/">M</a></li>
            <li><a href="/">N</a></li>
            <li><a href="/">O</a></li>
            <li><a href="/">P</a></li>
            <li><a href="/">Q</a></li>
            <li><a href="/">R</a></li>
            <li><a href="/">S</a></li>
            <li><a href="/">T</a></li>
            <li><a href="/">U</a></li>
            <li><a href="/">V</a></li>
            <li><a href="/">W</a></li>
            <li><a href="/">X</a></li>
            <li><a href="/">Y</a></li>
            <li><a href="/">Z</a></li>
          </ul>
        </Suggestions>

        <Suggestions>
          <ul className="list-unstyled d-flex flex-wrap">
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
            <li><a href="/">Termo</a></li>
          </ul>
        </Suggestions>
      </If>
    </div>
  )
}

export default SearchTerm
