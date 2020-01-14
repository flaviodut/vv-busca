import React from 'react'
// import { Link } from 'react-router-dom';

import Row from '../../commons/layout/row';
import Grid from '../../commons/layout/grid';

export default props => {
    const title = {
        color: 'tomato',
        backgroundColor: 'cyan'
    }

    return (
        <div className="container py-5">
            {/* <Link to="/login">login</Link> */}

            <Row>
                <Grid cols="12">
                    <h1 style={title}>Busca da busca</h1>
                </Grid>
            </Row>

            <Row>
                <Grid cols="12">
                    <div className="input-group align-self-center mb-3">
                        <input type="text" className="form-control form-control-lg border-right-0" id="inlineFormInputGroupUsername" placeholder="Filtrar por termo específico" />
                        <div className="input-group-append">
                            <div className="input-group-text text-black-50 bg-transparent border-left-0"><span className="fa fa-search"></span></div>
                        </div>
                    </div>
                </Grid>
                <Grid cols="12">
                    <div className="mb-5">
                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" className="custom-control-input border-danger" id="filtroTodos" defaultChecked />
                            <label className="custom-control-label" htmlFor="filtroTodos"><span className="badge badge-pill badge-secondary">Todos</span></label>
                        </div>
                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" className="custom-control-input" id="filtroAprovado" />
                            <label className="custom-control-label" htmlFor="filtroAprovado"><span className="badge badge-pill badge-success"><span className="fa fa-check-circle"></span> Aprovado</span></label>
                        </div>
                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" className="custom-control-input border-danger" id="filtroAguardando" />
                            <label className="custom-control-label" htmlFor="filtroAguardando"><span className="badge badge-pill badge-warning"><span className="fa fa-minus-circle"></span> Aguardando</span></label>
                        </div>
                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" className="custom-control-input" id="filtroReprovado" />
                            <label className="custom-control-label" htmlFor="filtroReprovado"><span className="badge badge-pill badge-danger"><span className="fa fa-times-circle"></span> Reprovado</span></label>
                        </div>
                    </div>
                </Grid>
            </Row>

            <Row>
                <Grid cols="12">
                    <div className="table-responsive mb-3">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Situação</th>
                                    <th scope="col">Prioridade</th>
                                    <th scope="col">Nível</th>
                                    <th scope="col" className="w-50">Nome</th>
                                    <th scope="col" className="text-center">Aprovar?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <span className="badge badge-pill badge-success"><span className="fa fa-check-circle"></span> Aprovado</span>
                                    </th>
                                    <td>0,96</td>
                                    <td>
                                        <div className="input-group input-group-sm">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="10" maxLength="2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Samsung Galaxy S9</td>
                                    <td className="text-center">
                                        <div className="btn-group" role="group" aria-label="Exemplo básico">
                                            <button type="button" className="btn btn-secondary btn-sm py-0 px-1"><span className="fa fa-check"></span></button> 
                                            <button type="button" className="btn btn-secondary btn-sm py-0 px-1"><span className="fa fa-ban"></span></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                    <span className="badge badge-pill badge-warning"><span className="fa fa-minus-circle"></span> Aguardando</span>
                                    </th>
                                    <td>0,95</td>
                                    <td>
                                        <div className="input-group input-group-sm">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="10" maxLength="2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Samsung Galaxy S8</td>
                                    <td className="text-center">
                                        <div className="btn-group" role="group" aria-label="Exemplo básico">
                                            <button type="button" className="btn btn-secondary btn-sm py-0 px-1"><span className="fa fa-check"></span></button> 
                                            <button type="button" className="btn btn-secondary btn-sm py-0 px-1"><span className="fa fa-ban"></span></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                    <span className="badge badge-pill badge-danger"><span className="fa fa-times-circle"></span> Reprovado</span>
                                    </th>
                                    <td>0,2</td>
                                    <td>
                                        <div className="input-group input-group-sm">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="10" maxLength="2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Xiaomi Redmi</td>
                                    <td className="text-center">
                                        <div className="btn-group" role="group" aria-label="Exemplo básico">
                                            <button type="button" className="btn btn-secondary btn-sm py-0 px-1"><span className="fa fa-check"></span></button> 
                                            <button type="button" className="btn btn-secondary btn-sm py-0 px-1"><span className="fa fa-ban"></span></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Row>

            <Row>
                <Grid cols="12">
                    <nav aria-label="Navegação de página exemplo">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="/" aria-label="Primeira" tabIndex="-1"><span className="fa fa-angle-double-left"></span></a>
                            </li>
                            <li className="page-item disabled">
                                <a className="page-link" href="/" aria-label="Anterior"><span className="fa fa-angle-left"></span></a>
                            </li>
                            <li className="page-item active"><span className="page-link">1</span></li>
                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item"><a className="page-link" href="/">4</a></li>
                            <li className="page-item"><a className="page-link" href="/">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="/" aria-label="Próxima"><span className="fa fa-angle-right"></span></a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="/" aria-label="Última"><span className="fa fa-angle-double-right"></span></a>
                            </li>
                        </ul>
                    </nav>
                </Grid>
            </Row>
        </div>
    )
}