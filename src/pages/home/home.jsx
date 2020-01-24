import React from 'react'
import { createGlobalStyle } from 'styled-components'
import WebFont from 'webfontloader';

import HeaderCasasBahia from '../../commons/template/header-casasbahia'

// families: Casas Bahia, Pontofrio, Extra
WebFont.load({
  google: {
    families: ['Nunito:400,800', 'Ubuntu:400,700', 'Muli:400,700']
  }
});

export default props => {
  const GlobalStyle = createGlobalStyle`
    body {
      color: #575757;
      font-family: 'Nunito', Arial, sans-serif;
      line-height: 1.5;
    }
  `
  
  return (
    <div>
      <GlobalStyle />
      <HeaderCasasBahia></HeaderCasasBahia>
    </div>
  )
}