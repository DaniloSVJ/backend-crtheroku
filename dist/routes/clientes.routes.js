"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerCliente = _interopRequireDefault(require("../service/Cliente/ControllerCliente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const clienteRoutes = (0, _express.Router)();
clienteRoutes.post('/', async (request, response) => {
  const {
    nome,
    CPF,
    RG,
    telefone,
    endereco,
    numero,
    cep,
    bairro,
    cidade,
    uf,
    isAtivado
  } = request.body;
  const clienteController = new _ControllerCliente.default();
  const cliente = await clienteController.execute({
    nome,
    CPF,
    RG,
    telefone,
    endereco,
    numero,
    cep,
    bairro,
    cidade,
    uf,
    isAtivado
  });
  return response.json(cliente);
});
clienteRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    nome,
    CPF,
    RG,
    telefone,
    cep,
    bairro,
    cidade,
    uf,
    isAtivado
  } = request.body;
  const updateCliente = new _ControllerCliente.default();
  const cliente = await updateCliente.update(id, nome, CPF, RG, telefone, cep, bairro, cidade, uf, isAtivado);
  return response.json(cliente);
});
clienteRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const updateGrupoProduto = new _ControllerCliente.default();
  updateGrupoProduto.delete(id);
  return response.json('Cliente deletado');
});
clienteRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const clienteController = new _ControllerCliente.default();
  const cliente = await clienteController.get(id);
  return response.json(cliente);
});
clienteRoutes.get('/', async (request, response) => {
  const clienteController = new _ControllerCliente.default();
  const clientes = await clienteController.getAll();
  return response.json(clientes);
});
var _default = clienteRoutes;
exports.default = _default;