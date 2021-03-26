"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _GrupoProdutoController = _interopRequireDefault(require("../service/GrupoProduto/GrupoProdutoController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const grupoProdutoRoutes = (0, _express.Router)();
grupoProdutoRoutes.post('/', async (request, response) => {
  const {
    nome
  } = request.body;
  const createGrupoProduto = new _GrupoProdutoController.default();
  const grupo = await createGrupoProduto.execute(nome);
  return response.json(grupo);
});
grupoProdutoRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    nome
  } = request.body;
  const updateGrupoProduto = new _GrupoProdutoController.default();
  const grupo = await updateGrupoProduto.update(id, nome);
  return response.json(grupo);
});
grupoProdutoRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const createGrupoProduto = new _GrupoProdutoController.default();
  const grupo = await createGrupoProduto.delete(id);
  return response.json('Grupo do Produto Deletado');
});
grupoProdutoRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const createGrupoProduto = new _GrupoProdutoController.default();
  const grupo = await createGrupoProduto.get(id);
  return response.json(grupo);
});
grupoProdutoRoutes.get('/', async (request, response) => {
  const createGrupoProduto = new _GrupoProdutoController.default();
  const grupo = await createGrupoProduto.getAll();
  return response.json(grupo);
});
var _default = grupoProdutoRoutes;
exports.default = _default;