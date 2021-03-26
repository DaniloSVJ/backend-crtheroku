"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerVendas = _interopRequireDefault(require("../service/Venda/ControllerVendas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const vendaRoutes = (0, _express.Router)();
vendaRoutes.post('/', async (request, response) => {
  const {
    id_cliente,
    vendedor
  } = request.body;
  const createVenda = new _ControllerVendas.default();
  const venda = await createVenda.execute(id_cliente, vendedor);
  return response.json(venda);
});
vendaRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const deletarVenda = new _ControllerVendas.default();
  await deletarVenda.delete(id);
  return response.json('Venda Cancelada');
});
vendaRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    id_cliente,
    vendedor
  } = request.body;
  const deletarVenda = new _ControllerVendas.default();
  await deletarVenda.update(id, id_cliente, vendedor);
  return response.json('Venda Atualizada');
});
vendaRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const verVenda = new _ControllerVendas.default();
  const venda = await verVenda.get(id);
  return response.json(venda);
});
vendaRoutes.get('/', async (request, response) => {
  const verVenda = new _ControllerVendas.default();
  const vendas = await verVenda.getAll();
  return response.json(vendas);
});
var _default = vendaRoutes;
exports.default = _default;