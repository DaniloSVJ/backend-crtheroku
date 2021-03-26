"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerItemVendaAcessoria = _interopRequireDefault(require("../service/Venda/ControllerItemVendaAcessoria"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItemvendaRoutes = (0, _express.Router)();
ItemvendaRoutes.post('/', async (request, response) => {
  const {
    id_vendas,
    ordem,
    codigo_produto,
    nome_produto,
    id_produtos,
    qtdvendido,
    valor_vendido
  } = request.body;
  const createVenda = new _ControllerItemVendaAcessoria.default();
  const venda = await createVenda.execute({
    id_vendas,
    ordem,
    codigo_produto,
    nome_produto,
    id_produtos,
    qtdvendido,
    valor_vendido
  });
  return response.json(venda);
});
ItemvendaRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    qtdvendido,
    valor_vendido
  } = request.body;
  const upitemVenda = new _ControllerItemVendaAcessoria.default();
  const itemvenda = await upitemVenda.update(id, qtdvendido, valor_vendido);
  return response.json(itemvenda);
});
ItemvendaRoutes.put('/codigo/:id', async (request, response) => {
  const {
    codigo
  } = request.params;
  const {
    qtdvendido,
    valor_vendido
  } = request.body;
  const upitemVenda = new _ControllerItemVendaAcessoria.default();
  const itemvenda = await upitemVenda.updatePorCodigo(codigo, qtdvendido, valor_vendido);
  return response.json(itemvenda);
});
ItemvendaRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const deletarItemVenda = new _ControllerItemVendaAcessoria.default();
  await deletarItemVenda.delete(id);
  return response.json('Venda Cancelada');
});
ItemvendaRoutes.delete('/', async (request, response) => {
  const deletarItemVenda = new _ControllerItemVendaAcessoria.default();
  await deletarItemVenda.deleteAll();
  return response.json('');
});
ItemvendaRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const veritemVenda = new _ControllerItemVendaAcessoria.default();
  const venda = await veritemVenda.get(id);
  return response.json(venda);
});
ItemvendaRoutes.get('/codigo/:id', async (request, response) => {
  const {
    codigo_produto
  } = request.params;
  const veritemVenda = new _ControllerItemVendaAcessoria.default();
  const venda = await veritemVenda.getVercodigo(codigo_produto);
  return response.json(venda);
});
ItemvendaRoutes.get('/', async (request, response) => {
  const veritemVenda = new _ControllerItemVendaAcessoria.default();
  const vendas = await veritemVenda.getAll();
  return response.json(vendas);
});
ItemvendaRoutes.get('/soma/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const veritemVenda = new _ControllerItemVendaAcessoria.default();
  const vendas = await veritemVenda.soma(id);
  return response.json(vendas);
});
var _default = ItemvendaRoutes;
exports.default = _default;