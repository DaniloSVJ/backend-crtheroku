"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerItemVendaPorVenda = _interopRequireDefault(require("../service/ItemVenda/ControllerItemVendaPorVenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const intemvendaPorVenda = (0, _express.Router)(); // intemvendaPorVenda.post('/', async (request,response)=>{
//     const{id_venda, valor, id_forma_pagmet,ordem,formapagamento,status} = request.body
//     const createFormaPagamentoV = new FormaPagamentoVenda();
//     const formVenda = await createFormaPagamentoV.execute(id_venda, valor, id_forma_pagmet,ordem,formapagamento,status)
//     return response.json(formVenda)
// })

intemvendaPorVenda.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    id_vendas,
    status
  } = request.body;
  const itemvenda = new _ControllerItemVendaPorVenda.default();
  const item = await itemvenda.update(id, id_vendas, status);
  return response.json(item);
});
intemvendaPorVenda.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const itemVenda = new _ControllerItemVendaPorVenda.default();
  await itemVenda.delete(id);
  return response.send('Forma de pagamento Deletada');
}); // intemvendaPorVenda.get('/:id',async (request,response)=>{
//     const{id} = request.params
//     const formapagamento = new FormaPagamentoVenda();
//     const formVenda = await formapagamento.get(id)
//     return response.json(formVenda)
// })
// intemvendaPorVenda.get('/',async (request,response)=>{
//     const formPagamentoVenda = new FormaPagamentoVenda();
//     const formVenda = await formPagamentoVenda.getAll()
//     return response.json(formVenda)
// })

var _default = intemvendaPorVenda;
exports.default = _default;