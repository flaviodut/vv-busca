import React from 'react'
// import styled from 'styled-components'

import Row from '../../commons/layout/row'
import Grid from '../../commons/layout/grid'

export default props => {
    return (
        <div className="py-5">
            <Row addClass="justify-content-center">
                <Grid cols="12 8 6 4">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title mb-4">Admin</h1>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Endereço de email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Senha</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                            </div>
                            <div className="form-group">
                                <a href="/esqueciminhasenha">Esqueci minha senha</a>
                            </div>
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </div>
                    </div>
                </Grid>
            </Row>
        </div>
    )
}