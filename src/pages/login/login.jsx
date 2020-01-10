import React from 'react'
import { Link } from 'react-router-dom';

import Row from '../../commons/layout/row'
import Grid from '../../commons/layout/grid'

export default props => (
    <Row>
        <Grid cols='6'>
            <Link to="/">home</Link>
        </Grid>
        <Grid cols='6'>
            <Link to="/">home</Link>
        </Grid>
    </Row>
)