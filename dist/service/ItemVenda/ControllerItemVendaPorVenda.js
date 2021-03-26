"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _itemVenda = _interopRequireDefault(require("../../models/itemVenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FormaPagamentoController {
  async delete(id) {
    const formaPagamento = (0, _typeorm.getRepository)(_itemVenda.default);
    await formaPagamento.createQueryBuilder().delete().where({
      itvidvendas: Number(id),
      itvstatus: "2"
    }).execute();
  }

  async update(id, id_vendas, status) {
    const repositoryFormaPagamento = (0, _typeorm.getRepository)(_itemVenda.default);
    let formpay = await repositoryFormaPagamento.createQueryBuilder().update().set({
      itvidvendas: id_vendas,
      itvstatus: status
    }).where({
      itvidvendas: Number(id)
    }).execute();
    return formpay;
  }

}

var _default = FormaPagamentoController;
exports.default = _default;