"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerProduto = _interopRequireDefault(require("../service/Produto/ControllerProduto"));

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../config/upload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import AddProdutoEstoque from '../service/Produto/ControllerProdutoEstoque'
const produtoRoutes = (0, _express.Router)();
const produtoRoutesEestoqueAdd = (0, _express.Router)();
const produtoRoutesEestoqueRemove = (0, _express.Router)();
const upload = (0, _multer.default)(_upload.default);
produtoRoutes.get('/', async (request, response) => {
  const getProdutos = new _ControllerProduto.default();
  const produto = await getProdutos.getAll(); //const  = produto
  //delete user.email

  return response.json(produto);
});
produtoRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    nome,
    codigo
  } = request.body;
  const getProdutos = new _ControllerProduto.default();
  const produto = await getProdutos.get(id);
  return response.json(produto);
});
produtoRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    nome,
    codigo,
    custo,
    valor_venda,
    id_grupo
  } = request.body;
  const updateProdutos = new _ControllerProduto.default();
  const produto = await updateProdutos.update(id, nome, codigo, custo, valor_venda, id_grupo); //const  = produto
  //delete user.email

  return response.json(produto);
});
produtoRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const deleteProdutos = new _ControllerProduto.default();
  await deleteProdutos.delete(id);
  return response.json('Produto deletado');
});
produtoRoutes.post('/', async (request, response) => {
  const {
    nome,
    codigo,
    custo,
    valor_venda,
    id_grupo,
    estoqueMin,
    estoqueMax,
    embalagem,
    quantidade,
    descricaoR,
    descricaoGeral
  } = request.body;
  const createProduto = new _ControllerProduto.default();
  const produto = await createProduto.execute({
    nome,
    codigo,
    custo,
    valor_venda,
    id_grupo,
    estoqueMin,
    estoqueMax,
    embalagem,
    quantidade,
    descricaoR,
    descricaoGeral
  }); //delete user.email
  //const addProdtudoEstoque = new AddProdutoEstoque();
  //const addEstoque = await addProdtudoEstoque.aumentar(produto.id)

  return response.json({
    produto
  }); //,addEstoque})
}); // produtoRoutesEestoqueAdd.put('/', async (request, response) => {
//     const { id } = request.body
//     const addProdtudoEstoque = new AddProdutoEstoque();
//     const produto = await addProdtudoEstoque.aumentar(id)
//     //delete user.email
//     return response.json(produto)
// })
// produtoRoutesEestoqueRemove.put('/', async (request, response) => {
//     const { id } = request.body
//     const addProdtudoEstoque = new AddProdutoEstoque();
//     const produto = await addProdtudoEstoque.diminuir(id)
//     //delete user.email
//     return response.json(produto)
// })

var _default = {
  produtoRoutes,
  produtoRoutesEestoqueAdd,
  produtoRoutesEestoqueRemove
};
exports.default = _default;