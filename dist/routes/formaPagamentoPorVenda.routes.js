"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerFormaPagamentoPorVenda = _interopRequireDefault(require("../service/FormaPagamento/ControllerFormaPagamentoPorVenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formPagamentoVendaRoutes = (0, _express.Router)(); // formPagamentoVendaRoutes.post('/', async (request,response)=>{
//     const{id_venda, valor, id_forma_pagmet,ordem,formapagamento,status} = request.body
//     const createFormaPagamentoV = new FormaPagamentoVenda();
//     const formVenda = await createFormaPagamentoV.execute(id_venda, valor, id_forma_pagmet,ordem,formapagamento,status)
//     return response.json(formVenda)
// })

formPagamentoVendaRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    id_venda,
    status
  } = request.body;
  const formapagamento = new _ControllerFormaPagamentoPorVenda.default();
  const formpayup = await formapagamento.update(id, id_venda, status);
  return response.json(formpayup);
});
formPagamentoVendaRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const formapagamento = new _ControllerFormaPagamentoPorVenda.default();
  let messagem = '';
  const qtdAfedado = await formapagamento.delete(id);

  if (qtdAfedado === 0) {
    messagem = 'Nenhum registro foi deletado';
  } else {
    if (qtdAfedado === 1) {
      messagem = `Foi deletado ${qtdAfedado} registro`;
    } else {
      messagem = `Foram deletados ${qtdAfedado} registros`;
    }
  }

  return response.send(messagem);
}); // formPagamentoVendaRoutes.get('/:id',async (request,response)=>{
//     const{id} = request.params
//     const formapagamento = new FormaPagamentoVenda();
//     const formVenda = await formapagamento.get(id)
//     return response.json(formVenda)
// })
// formPagamentoVendaRoutes.get('/',async (request,response)=>{
//     const formPagamentoVenda = new FormaPagamentoVenda();
//     const formVenda = await formPagamentoVenda.getAll()
//     return response.json(formVenda)
// })

var _default = formPagamentoVendaRoutes;
exports.default = _default;