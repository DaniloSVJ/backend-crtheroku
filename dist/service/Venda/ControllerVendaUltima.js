"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _vendas = _interopRequireDefault(require("../../models/vendas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FormaPagamentoController {
  async ultimaVenda() {
    const somaPorVenda = (0, _typeorm.getRepository)(_vendas.default);
    const {
      max
    } = await somaPorVenda.createQueryBuilder().select("MAX(vendaidid)", "max").getRawOne();
    return max;
  }

}

var _default = FormaPagamentoController;
exports.default = _default;