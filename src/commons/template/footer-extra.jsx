import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  font-size: .675rem;
  text-align: center;

  a, a:active, a:focus, a:hover {
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
  }
`

const Footer = props => {
  return (
    <FooterWrapper>
      <div className="container-fluid container-md pt-4 pb-3">
        <p>
          Preços e condições exclusivos para o extra.com.br (exceto alimentos e bebidas) e para o televendas (exceto alimentos e bebidas), podendo sofrer alterações sem prévia notificação.<br />
          <a href="https://www.viavarejo.com.br/" title="Via Varejo S.A." rel="nofollow,noindex">Via Varejo S.A.</a> | www.extra.com.br | Rua Samuel Klein, n° 83 | São Caetano do Sul - SP - CEP: 09510-125 - CNPJ: 33.041.260/0652-90 | Inscrição Estadual: 636.169.915.112 | Telefone: (11) 4003-3383.<br />
          Observação: Ao utilizar o meio de pagamento Primeira Compra, a compra de garantias estendidas de produtos somente poderão ser realizadas em conjunto com o produto.
        </p>
      </div>
    </FooterWrapper>
  )
}

export default Footer