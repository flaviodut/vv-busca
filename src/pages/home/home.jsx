import React from 'react'

import Row from '../../commons/layout/row'
import Grid from '../../commons/layout/grid'

import SearchTerm from '../../commons/template/search-term'
import SearchSidebar from '../../commons/template/search-sidebar'
import SearchGrid from '../../commons/template/search-grid'

const bandeira = 'cb'

let Styles
let Header
let Footer

switch (bandeira) {
  case 'cb':
    Styles = require('../../commons/assets/styles-casasbahia').default
    Header = require('../../commons/template/header-casasbahia').default
    Footer = require('../../commons/template/footer-casasbahia').default
    break;
    
  case 'pf':
    Styles = require('../../commons/assets/styles-pontofrio').default
    Header = require('../../commons/template/header-pontofrio').default
    Footer = require('../../commons/template/footer-pontofrio').default
    break;

  case 'ex':
    Styles = require('../../commons/assets/styles-extra').default
    Header = require('../../commons/template/header-extra').default
    Footer = require('../../commons/template/footer-extra').default
    break;

  default:
    break;
}

export default props => {
  return (
    <div>
      <Styles />
      <Header />

      <div className="container-fluid container-md">
        <Row>
          <Grid cols="12">
            <SearchTerm qtyProducts={1} />
          </Grid>
        </Row>
        <Row>
          <Grid cols="12 4 4 3">
            <SearchSidebar />
          </Grid>
          <Grid cols="12 8 8 9">
            <SearchGrid />
          </Grid>
        </Row>
      </div>
    
      <Footer />
    </div>
  )
}