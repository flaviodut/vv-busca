import React from 'react'

import Row from '../../commons/layout/row'
import Grid from '../../commons/layout/grid'

import StylesCasasBahia from '../../commons/assets/styles-casasbahia'
import HeaderCasasBahia from '../../commons/template/header-casasbahia'

import SearchTerm from '../../commons/template/search-term'
import SearchSidebar from '../../commons/template/search-sidebar'
import SearchGrid from '../../commons/template/search-grid'

export default props => {
  return (
    <div>
      <StylesCasasBahia />
      <HeaderCasasBahia />

      <div className="container">
        <Row>
          <Grid cols="12">
            <SearchTerm />
          </Grid>
        </Row>
        <Row>
          <Grid cols="12 3">
            <SearchSidebar />
          </Grid>
          <Grid cols="12 9">
            <SearchGrid />
          </Grid>
        </Row>
      </div>
    </div>
  )
}