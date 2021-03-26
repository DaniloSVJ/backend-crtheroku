"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _formaPagamentoVenda = _interopRequireDefault(require("../../models/formaPagamentoVenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FormaPagamentoController {
  async delete(id) {
    const formaPagamento = (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    const qtd = await formaPagamento.createQueryBuilder().delete().where({
      fpvidvenda: Number(id),
      fpvstatus: false
    }).execute();
    console.log(qtd.affected);
    return qtd.affected;
  }

  async update(id, id_venda, status) {
    const repositoryFormaPagamento = (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    let formpay = await repositoryFormaPagamento.createQueryBuilder().update().set({
      fpvidvenda: id_venda,
      fpvstatus: status
    }).where({
      fpvstatus: false
    }).execute();
    return formpay;
  }

}

var _default = FormaPagamentoController;
exports.default = _default;