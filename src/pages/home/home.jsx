import React from 'react'

import Row from '../../commons/layout/row'
import Grid from '../../commons/layout/grid'

import StylesCasasBahia from '../../commons/assets/styles-casasbahia'
import HeaderCasasBahia from '../../commons/template/header-casasbahia'

import SearchTerm from '../../commons/template/search-term'
import SearchSidebar from '../../commons/template/search-sidebar'
import SearchResult from '../../commons/template/search-result'

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
          <Grid cols="2">
            <SearchSidebar />
          </Grid>
          <Grid cols="8">
            <SearchResult />
          </Grid>
        </Row>
      </div>
    </div>
  )
}