"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerFormaPagamento = _interopRequireDefault(require("../service/FormaPagamento/ControllerFormaPagamento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formaPagamentoRoutes = (0, _express.Router)();
formaPagamentoRoutes.post('/', async (request, response) => {
  const {
    nome
  } = request.body;
  const createFormaPagamento = new _ControllerFormaPagamento.default();
  const formapagamento = await createFormaPagamento.execute(nome); //delete user.email

  return response.json(formapagamento);
});
formaPagamentoRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    nome
  } = request.body;
  const formapagamento = new _ControllerFormaPagamento.default();
  const formpayup = await formapagamento.update(id, nome);
  return response.json(formpayup);
});
formaPagamentoRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const formapagamento = new _ControllerFormaPagamento.default();
  await formapagamento.delete(id);
  return response.send('Forma de pagamento Deletada');
});
formaPagamentoRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const formaPagamento = new _ControllerFormaPagamento.default();
  const formapagamento = await formaPagamento.get(id);
  return response.json(formapagamento);
});
formaPagamentoRoutes.get('/', async (request, response) => {
  const formaPagamento = new _ControllerFormaPagamento.default();
  const formapagamento = await formaPagamento.getAll();
  return response.json(formapagamento);
});
var _default = formaPagamentoRoutes;
exports.default = _default;