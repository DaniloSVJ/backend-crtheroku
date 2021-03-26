"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerFormaPagamentoVenda = _interopRequireDefault(require("../service/FormaPagamento/ControllerFormaPagamentoVenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formPagamentoVendaRoutes = (0, _express.Router)();
formPagamentoVendaRoutes.post('/', async (request, response) => {
  const {
    id_venda,
    valor,
    id_forma_pagmet,
    ordem,
    formapagamento,
    status
  } = request.body;
  const createFormaPagamentoV = new _ControllerFormaPagamentoVenda.default();
  const formVenda = await createFormaPagamentoV.execute(id_venda, valor, id_forma_pagmet, ordem, formapagamento, status);
  return response.json(formVenda);
});
formPagamentoVendaRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    valor
  } = request.body;
  const formapagamento = new _ControllerFormaPagamentoVenda.default();
  const formpayup = await formapagamento.update(id, valor);
  return response.json(formpayup);
});
formPagamentoVendaRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const formapagamento = new _ControllerFormaPagamentoVenda.default();
  await formapagamento.delete(id);
  return response.send('Forma de pagamento Deletada');
});
formPagamentoVendaRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const formapagamento = new _ControllerFormaPagamentoVenda.default();
  const formVenda = await formapagamento.get(id);
  return response.json(formVenda);
});
formPagamentoVendaRoutes.get('/', async (request, response) => {
  const formPagamentoVenda = new _ControllerFormaPagamentoVenda.default();
  const formVenda = await formPagamentoVenda.getAllStatus();
  return response.json(formVenda);
});
formPagamentoVendaRoutes.get('/soma/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const forma = new _ControllerFormaPagamentoVenda.default();
  const total = await forma.soma(id);
  return response.json(total);
});
var _default = formPagamentoVendaRoutes;
exports.default = _default;