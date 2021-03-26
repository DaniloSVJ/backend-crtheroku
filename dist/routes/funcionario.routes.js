"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerFuncionario = _interopRequireDefault(require("../service/Vendedor/ControllerFuncionario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const funcionarioRoutes = (0, _express.Router)();
funcionarioRoutes.post('/', async (request, response) => {
  const {
    cpf,
    nome
  } = request.body;
  const createFuncionario = new _ControllerFuncionario.default();
  const funcionario = await createFuncionario.execute(cpf, nome); //delete user.email

  return response.json(funcionario);
});
funcionarioRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    nome,
    cpf
  } = request.body;
  const formapagamento = new _ControllerFuncionario.default();
  const funcionario = await formapagamento.update(id, nome, cpf);
  return response.json(funcionario);
});
funcionarioRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const funcionario = new _ControllerFuncionario.default();
  await funcionario.delete(id);
  return response.send('Funcionario Deletado');
});
funcionarioRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const funcionarioController = new _ControllerFuncionario.default();
  const funcionario = await funcionarioController.get(id);
  return response.json(funcionario);
});
funcionarioRoutes.get('/', async (request, response) => {
  const funcionarioController = new _ControllerFuncionario.default();
  const funcionarios = await funcionarioController.getAll();
  return response.json(funcionarios);
});
var _default = funcionarioRoutes;
exports.default = _default;