import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../pages/login/login'
import Home from '../pages/home/home'

const autenticado = true;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            autenticado ? (<Component {...rest} />) :
                (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
        )}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/' component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes