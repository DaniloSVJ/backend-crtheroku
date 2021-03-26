"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _formaPagamentoVenda = _interopRequireDefault(require("../../models/formaPagamentoVenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FormaPagamentoControllerVenda {
  async execute(id_venda, valor, id_forma_pagmet, ordem, formapagamento, status) {
    const formaPagamento = (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    const formPayVenda = await formaPagamento.create({
      fpvidvenda: id_venda,
      fpvvalor: valor,
      fpvidforpag: id_forma_pagmet,
      fpvordem: ordem,
      fpvformapagamento: formapagamento,
      fpvstatus: status
    });
    await formaPagamento.save(formPayVenda);
    return formPayVenda;
  }

  async update(id, valor) {
    const repositoryFormaPagamento = (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    const checkFormPay = await repositoryFormaPagamento.findOne({
      where: {
        fpvid: id
      }
    });
    let formpay;

    if (checkFormPay) {
      formpay = await repositoryFormaPagamento.createQueryBuilder().update().set({
        fpvvalor: valor
      }).where({
        fpvidvenda: Number(id)
      }).execute();
    }

    return formpay;
  }

  async delete(id) {
    const formaPagamento = (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    await formaPagamento.createQueryBuilder().delete().where({
      fpvidvenda: Number(id),
      fpvstatus: false
    }).execute();
  }

  async getAll() {
    const formaPagamento = await (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    const pagamento = await formaPagamento.find();
    return pagamento;
  }

  async getAllStatus() {
    const formaPagamento = await (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    const pagamento = await formaPagamento.createQueryBuilder().where({
      fpvstatus: false
    }).getMany();
    return pagamento;
  }

  async get(id) {
    const formaPagamento = await (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    const pagamento = await formaPagamento.findOne({
      where: {
        fpvid: Number(id)
      }
    });
    return pagamento;
  }

  async soma(id) {
    const somaPorVenda = (0, _typeorm.getRepository)(_formaPagamentoVenda.default);
    const {
      sum
    } = await somaPorVenda.createQueryBuilder().select("SUM(fpvvalor)", "sum").where({
      fpvstatus: false,
      fpvidvenda: Number(id)
    }).getRawOne();
    const total = Number(sum);
    return total;
  }

}

var _default = FormaPagamentoControllerVenda;
exports.default = _default;