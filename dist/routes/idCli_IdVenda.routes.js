"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerIdClie_IdVenda = _interopRequireDefault(require("../service/Outros/ControllerIdClie_IdVenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IdsRoutes = (0, _express.Router)();
IdsRoutes.post('/', async (request, response) => {
  const {
    idCliente,
    idcaixa
  } = request.body;
  const createIdClieAndVenda = new _ControllerIdClie_IdVenda.default();
  const Ids = await createIdClieAndVenda.execute(idCliente, idcaixa);
  return response.json(Ids);
});
IdsRoutes.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const {
    idcaixa
  } = request.body;
  const updateIDs_CLI_CAIXA = new _ControllerIdClie_IdVenda.default();
  const Ids = await updateIDs_CLI_CAIXA.update(id, idcaixa);
  return response.json(Ids);
});
IdsRoutes.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const createIDs_CLI_CAIXA = new _ControllerIdClie_IdVenda.default();
  const Ids = await createIDs_CLI_CAIXA.delete(id);
  return response.send('Ids da tabela Deletado');
});
IdsRoutes.get('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const createIDs_CLI_CAIXA = new _ControllerIdClie_IdVenda.default();
  const Ids = await createIDs_CLI_CAIXA.get(id);
  return response.json(Ids);
});
IdsRoutes.get('/', async (request, response) => {
  const createIDs_CLI_CAIXA = new _ControllerIdClie_IdVenda.default();
  const Ids = await createIDs_CLI_CAIXA.getAll();
  return response.json(Ids);
});
var _default = IdsRoutes;
exports.default = _default;