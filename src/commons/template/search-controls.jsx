import React from 'react'
import styled from 'styled-components'

export default class SearchProductControl extends React.Component {
  render() {
    const Controls = styled.div`
      display: flex;
      font-size: .75rem;
      justify-content: space-between;
      margin-bottom: 1.875em;

      @media (min-width: 768px) {
        align-items: center;
        font-size: .875rem;
      }

      @media (min-width: 992px) {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      p {
        margin-bottom: 0;
        margin-top: -1em;

        @media (min-width: 576px) {
          margin-top: 0;
        }
      }
    `
    
    const ControlField = styled.div`
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (min-width: 768px) {
      }

      @media (min-width: 992px) {
        align-items: center;
        flex-direction: row;
      }

      label {
        margin-bottom: 0;
        white-space: nowrap;

        @media (min-width: 768px) {
          margin-right: 1rem;
        }
      }

      select {
        border-color: #c0c0c0;
        color: var(--textColor);
        font-size: .875rem;
        font-weight: 700;
      }
    `

    return (
      <Controls>
        <p><b>65</b> produtos encontrados</p>
        <ControlField className="d-none d-sm-flex">
          <label>Ordenar por</label>
          <select className="form-control">
            <option sort="1">Relevância</option>
            <option sort="16">Maior desconto</option>
            <option sort="5">Menor preço</option>
            <option sort="6">Maior preço</option>
            <option sort="11">Novidades</option>
          </select>
        </ControlField>
      </Controls>
    )
  }
}