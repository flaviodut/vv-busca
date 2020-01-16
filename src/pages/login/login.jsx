import React from 'react'
import styled from 'styled-components'

import Row from '../../commons/layout/row'
import Grid from '../../commons/layout/grid'
import Header from '../../commons/template/header'

export default props => {
    return (
        <div className="py-5">
            <Header></Header>

            <Row addClass="justify-content-center">
                <Grid cols="12 8 4">
                    Login
                </Grid>
            </Row>
        </div>
    )
}