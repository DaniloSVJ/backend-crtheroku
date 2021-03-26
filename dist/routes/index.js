"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _produtos = _interopRequireDefault(require("./produtos.routes"));

var _grupoProd = _interopRequireDefault(require("./grupoProd.routes"));

var _subgrupoProd = _interopRequireDefault(require("./subgrupoProd.routes"));

var _clientes = _interopRequireDefault(require("./clientes.routes"));

var _venda = _interopRequireDefault(require("./venda.routes"));

var _vendaUltima = _interopRequireDefault(require("./vendaUltima.routes"));

var _itemvenda = _interopRequireDefault(require("./itemvenda.routes"));

var _itemVendaPorVenda = _interopRequireDefault(require("./itemVendaPorVenda.routes"));

var _idCli_IdVenda = _interopRequireDefault(require("./idCli_IdVenda.routes"));

var _formaPagamento = _interopRequireDefault(require("./formaPagamento.routes"));

var _formaPagamentoVenda = _interopRequireDefault(require("./formaPagamentoVenda.routes"));

var _formaPagamentoPorVenda = _interopRequireDefault(require("./formaPagamentoPorVenda.routes"));

var _funcionario = _interopRequireDefault(require("./funcionario.routes"));

var _session = _interopRequireDefault(require("./session.routes"));

var _users = _interopRequireDefault(require("./users.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use("/users", _users.default);
routes.use("/sessions", _session.default);
routes.use("/cliente", _clientes.default);
routes.use("/vendedor", _funcionario.default);
routes.use("/itemvenda", _itemvenda.default);
routes.use("/itemvendaVenda", _itemVendaPorVenda.default);
routes.use("/idCli_Caixa", _idCli_IdVenda.default);
routes.use("/venda", _venda.default);
routes.use("/ultimavenda", _vendaUltima.default);
routes.use("/produto", _produtos.default.produtoRoutes);
routes.use("/estoque", _produtos.default.produtoRoutesEestoqueRemove);
routes.use("/grupoproduto", _grupoProd.default);
routes.use("/subgrupoproduto", _subgrupoProd.default);
routes.use("/produtoEstoque", _produtos.default.produtoRoutesEestoqueAdd);
routes.use("/formapagamento", _formaPagamento.default);
routes.use("/formapagamentovenda", _formaPagamentoVenda.default);
routes.use("/formapagamentovendaUpDate", _formaPagamentoPorVenda.default);
var _default = routes;
exports.default = _default;