"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _Controllerteste = _interopRequireDefault(require("../service/Outros/Controllerteste"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const teste = (0, _express.Router)();
teste.post('/', async (request, response) => {
  const {
    nome
  } = request.body;
  const createGrupoProduto = new _Controllerteste.default();
  const grupo = await createGrupoProduto.execute(nome);
  return response.json(grupo);
});
var _default = teste;
exports.default = _default;