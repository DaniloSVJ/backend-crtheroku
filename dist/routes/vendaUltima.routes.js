"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ControllerVendaUltima = _interopRequireDefault(require("../service/Venda/ControllerVendaUltima"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const vendaRoutes = (0, _express.Router)();
vendaRoutes.get('/', async (request, response) => {
  const verVenda = new _ControllerVendaUltima.default();
  const vendas = await verVenda.ultimaVenda();
  return response.json(vendas);
});
var _default = vendaRoutes;
exports.default = _default;