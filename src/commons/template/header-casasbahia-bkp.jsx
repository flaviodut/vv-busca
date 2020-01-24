import React, { Component } from 'react'
import styled from 'styled-components'

import Row from '../../commons/layout/row'
import Grid from '../../commons/layout/grid'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div class="main">
          <div class="container">
            <div class="row">
              <span id="logotipo" class="brand"><a href="//www.casasbahia.com.br" id="Logo">CasasBahia.com.br</a></span>
              <div class="search_bar" id="formBusca">
                <input type="text" id="strBusca" value="" name="strBusca" placeholder="O que você está procurando?"
                  spellcheck="false" autocomplete="off" />
                <input type="hidden" id="Filtro" name="Filtro" disabled="disabled" />
                <button type="button" value="Buscar" id="btnOK">Buscar</button>
              </div>
              <div class="profile">
                <span class="welcome" id="MenuWelcomeDeslogado">
                  <i></i>
                  <strong>
                    <a href="//carrinho.casasbahia.com.br/Checkout?ReturnUrl=https://www.casasbahia.com.br#login"
                      id="lnkCadastreSe">Entre ou Cadastre-se</a>
                  </strong>
                  <span>
                    <a href="//carrinho.casasbahia.com.br/Checkout?ReturnUrl=https://www.casasbahia.com.br#login">para ver seus pedidos</a>
                  </span>
                </span>
                <span class="welcome" id="MenuWelcomeLogado">
                  <i></i>
                  <strong id="lblLoginMsg"></strong>
                  <span>
                    <a href="//carrinho.casasbahia.com.br/Site/MeusPedidos.aspx" id="VerMeusPedidos">Ver seus pedidos</a> | <a
                      href="//carrinho.casasbahia.com.br/Cliente/Logout" id="Sair">Sair</a>
                  </span>
                </span>
                <div class="tooltip" id="ToolTipWelcome">
                  <div class="not-logged">
                    <nav>
                      <ul>
                        <li><a href="//carrinho.casasbahia.com.br/Site/MeusPedidos.aspx" title="Meus pedidos">Pedidos</a></li>
                        <li><a href="//carrinho.casasbahia.com.br/Cliente/MeuPerfil" title="Perfil">Perfil</a></li>
                        <li><a href="//casamento.casasbahia.com.br" title="Lista de Casamento">Lista de Casamento</a></li>
                      </ul>
                    </nav>
                    <div class="login">
                      <h3>Seja Bem-Vindo</h3>
                      <div class="profile-button">
                        <a href="https://carrinho.casasbahia.com.br/Checkout?ReturnUrl=https://www.casasbahia.com.br#login"
                          title="Acessar Perfil">Acessar Perfil</a>
                      </div>
                      <span>Novo aqui? <a
                          href="https://carrinho.casasbahia.com.br/Checkout?ReturnUrl=https://www.casasbahia.com.br#login"
                          title="Cadastre-se">Cadastre-se</a></span>
                    </div>
                  </div>
                  <div class="logged">
                    <nav>
                      <ul>
                        <li><a href="https://carrinho.casasbahia.com.br/Site/MeusPedidos.aspx" title="Pedidos">Pedidos</a>
                        </li>
                        <li><a href="https://carrinho.casasbahia.com.br/Cliente/MeuPerfil" title="Perfil">Perfil</a></li>
                        <li><a href="//casamento.casasbahia.com.br" title="Lista de Casamento">Lista de Casamento</a></li>
                        <li class="logout"><a href="https://carrinho.casasbahia.com.br/Cliente/Logout" title="Sair">Sair</a>
                        </li>
                      </ul>
                    </nav>
                    <div class="last-order">
                      <h3>Último Pedido</h3>
                      <span class="number" id="ultimoPedidoNumero"></span>
                      <a class="description" id="ultimoPedidoDescricao"
                        href="https://carrinho.casasbahia.com.br/Site/MeusPedidos.aspx">a</a>
                      <span class="status shipped" id="ultimoPedidoStatus"></span>
                      <span class="delivery" id="ultimoPedidoPrevisao"><span class="date" id="ultimoPedidoData"></span></span>
                      <a class="view-all" href="https://carrinho.casasbahia.com.br/Site/MeusPedidos.aspx"
                        title="Ver todos">Ver todos</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cart">
                <a class="cart-quantity" href="//carrinho.casasbahia.com.br/" id="itensCarrinho">a</a>
                <div id="MeuCarrinhoHeader" class="tooltip">
                  <div class="my-cart">
                    <h3>Meu <strong>Carrinho</strong></h3> <span id="quantidadeItensMeuCarrinhoHeader"
                      class="item-quantity"></span>
                  </div>
                  <div id="produtosMeuCarrinhoHeader" class="my-orders"></div>
                  <div class="total-orders">
                    <strong>Valor total</strong>
                    <span class="details">
                      <strong id="valorTotalMeuCarrinhoHeader" class="total"></strong>
                    </span>
                    <a id="linkFinalizarPedidoMeuCarrinhoHeader" class="finalize-order" href="/" title="Finalizar Pedido">Comprar Produtos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
