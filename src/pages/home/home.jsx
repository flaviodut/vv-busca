import React from 'react'
import styled from 'styled-components'

import Row from '../../commons/layout/row'
import Grid from '../../commons/layout/grid'
import Header from '../../commons/template/header'

export default props => {
    const Table = styled.table`
        thead th:last-of-type {
            width: 50%;
        }`

    const InputNumeric = styled.div`
        input.form-control {
            max-width: 3.5rem;
            min-width: 2.5rem;
        }`

    const Pagination = styled.ul`
        .page-link {
            color: #6c757d;
        }
    
        .page-item.active .page-link {
            background-color: #6c757d;
            border-color: #6c757d;
        }`

    const ToggleStatus = styled.div`
        .btn-success.active {
            color: #fff;
            background-color: #28a745;
        }`

    return (
        <div className="py-5">
            {/* Coloquei o header aqui pra ficar mais fácil de eu transitar entre login e home */}
            <Header></Header>

            {/* Componente heading title */}
            <Row>
                <Grid cols="12">
                    <h1>Busca da busca</h1>
                    <p className="lead">Descrição do módulo.</p>
                </Grid>
            </Row>

            {/* Campos de filtros */}
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

            {/* Listagem de termos - Opção 1 */}
            <Row>
                <Grid cols="12">
                    <div className="table-responsive mb-5">
                        <Table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Situação</th>
                                    <th scope="col">Prioridade</th>
                                    <th scope="col">Nível</th>
                                    <th scope="col">Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/" className="badge badge-pill badge-success"><span className="fa fa-check-circle"></span> Aprovado</a>
                                    </td>
                                    <td>0,96</td>
                                    <td>
                                        <InputNumeric className="input-group input-group-sm flex-nowrap">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="100" maxLength="3" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </InputNumeric>
                                    </td>
                                    <td>Samsung Galaxy S9</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/" className="badge badge-pill badge-warning"><span className="fa fa-minus-circle"></span> Aguardando</a>
                                    </td>
                                    <td>0,95</td>
                                    <td>
                                        <InputNumeric className="input-group input-group-sm flex-nowrap">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="10" maxLength="2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </InputNumeric>
                                    </td>
                                    <td>Samsung Galaxy S8</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/" className="badge badge-pill badge-danger"><span className="fa fa-times-circle"></span> Reprovado</a>
                                    </td>
                                    <td>0,2</td>
                                    <td>
                                        <InputNumeric className="input-group input-group-sm flex-nowrap">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="10" maxLength="2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </InputNumeric>
                                    </td>
                                    <td>Xiaomi Redmi</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Grid>
            </Row>

            {/* Listagem de termos - Opção 2 */}
            <Row>
                <Grid cols="12">
                    <div className="table-responsive mb-5">
                        <Table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Situação</th>
                                    <th scope="col">Prioridade</th>
                                    <th scope="col">Nível</th>
                                    <th scope="col">Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <ToggleStatus className="btn-group btn-group-toggle btn-group-sm" data-toggle="buttons">
                                            <label className="btn btn-success">
                                                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /><span className="fa fa-check"></span>
                                            </label>
                                            <label className="btn btn-light">
                                                <input type="radio" name="options" id="option2" autoComplete="off" /><span className="fa fa-minus"></span>
                                            </label>
                                            <label className="btn btn-light">
                                                <input type="radio" name="options" id="option3" autoComplete="off" /><span className="fa fa-times"></span>
                                            </label>
                                        </ToggleStatus>
                                    </td>
                                    <td>0,96</td>
                                    <td>
                                        <InputNumeric className="input-group input-group-sm flex-nowrap">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="100" maxLength="3" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </InputNumeric>
                                    </td>
                                    <td>Samsung Galaxy S9</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ToggleStatus className="btn-group btn-group-toggle btn-group-sm" data-toggle="buttons">
                                            <label className="btn btn-light">
                                                <input type="radio" name="options" id="option1" autoComplete="off" /><span className="fa fa-check"></span>
                                            </label>
                                            <label className="btn btn-warning">
                                                <input type="radio" name="options" id="option2" autoComplete="off" defaultChecked /><span className="fa fa-minus"></span>
                                            </label>
                                            <label className="btn btn-light">
                                                <input type="radio" name="options" id="option3" autoComplete="off" /><span className="fa fa-times"></span>
                                            </label>
                                        </ToggleStatus>
                                    </td>
                                    <td>0,95</td>
                                    <td>
                                        <InputNumeric className="input-group input-group-sm flex-nowrap">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="10" maxLength="2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </InputNumeric>
                                    </td>
                                    <td>Samsung Galaxy S8</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ToggleStatus className="btn-group btn-group-toggle btn-group-sm" data-toggle="buttons">
                                            <label className="btn btn-light">
                                                <input type="radio" name="options" id="option1" autoComplete="off" /><span className="fa fa-check"></span>
                                            </label>
                                            <label className="btn btn-light">
                                                <input type="radio" name="options" id="option2" autoComplete="off" /><span className="fa fa-minus"></span>
                                            </label>
                                            <label className="btn btn-danger">
                                                <input type="radio" name="options" id="option3" autoComplete="off" defaultChecked /><span className="fa fa-times"></span>
                                            </label>
                                        </ToggleStatus>
                                    </td>
                                    <td>0,2</td>
                                    <td>
                                        <InputNumeric className="input-group input-group-sm flex-nowrap">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonSub"><span className="fa fa-angle-down"></span></button>
                                            </div>
                                            <input type="text" className="form-control input-number text-center" defaultValue="0" min="0" max="10" maxLength="2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary px-1" type="button" id="buttonAdd"><span className="fa fa-angle-up"></span></button>
                                            </div>
                                        </InputNumeric>
                                    </td>
                                    <td>Xiaomi Redmi</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Grid>
            </Row>

            {/* Paginação gray */}
            <Row>
                <Grid cols="12">
                    <nav aria-label="Navegação de termos da busca">
                        <Pagination className="pagination justify-content-center">
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
                        </Pagination>
                    </nav>
                </Grid>
            </Row>
        </div>
    )
}