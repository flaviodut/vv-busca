import React from 'react'
import styled from 'styled-components'

export default class SearchProductControl extends React.Component {
  render() {
    const Controls = styled.div`
      align-items: center;
      display: flex;
      font-size: .875rem;
      justify-content: space-between;
      margin-bottom: 1.875em;
      padding-left: 1rem;
      padding-right: 1rem;

      p {
        margin-bottom: 0;
      }
    `
    
    const ControlField = styled.div`
      display: flex;
      align-items: center;

      label {
        margin-bottom: 0;
        margin-right: 1rem;
        white-space: nowrap;
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
        <ControlField>
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