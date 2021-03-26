"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

var _formaPagamento = _interopRequireDefault(require("../../models/formaPagamento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FormaPagamentoController {
  async execute(nome) {
    const formaPagamento = (0, _typeorm.getRepository)(_formaPagamento.default);
    const checkNameGrup = await formaPagamento.findOne({
      where: {
        forpagnome: nome
      }
    });

    if (checkNameGrup) {
      throw new _AppErro.default('Name grupo already used');
    }

    let ordem = 0;
    const {
      max
    } = await formaPagamento.createQueryBuilder().select("Max(forpaordem)", "max").getRawOne();

    for (var i = 1; i <= max; i++) {
      let verordem = await formaPagamento.findOne({
        where: {
          forpaordem: i
        }
      });

      if (!verordem) {
        ordem = i;
        console.log(i);
      }
    }

    const forma = await formaPagamento.create({
      forpagnome: nome,
      forpaordem: ordem
    });
    await formaPagamento.save(forma);
    return forma;
  }

  async update(id, nome) {
    const repositoryFormaPagamento = (0, _typeorm.getRepository)(_formaPagamento.default);
    const checkCliente = await repositoryFormaPagamento.findOne({
      where: {
        forpagid: Number(id)
      }
    });
    let pagamento;

    if (checkCliente) {
      pagamento = await repositoryFormaPagamento.createQueryBuilder().update().set({
        forpagnome: nome
      }).where({
        forpagid: Number(id)
      }).execute();
    }

    return pagamento;
  }

  async delete(id) {
    const formaPagamento = (0, _typeorm.getRepository)(_formaPagamento.default);
    await formaPagamento.createQueryBuilder().delete().where({
      forpagid: Number(id)
    }).execute();
  }

  async getAll() {
    const formaPagamento = await (0, _typeorm.getRepository)(_formaPagamento.default);
    const pagamento = await formaPagamento.find();
    return pagamento;
  }

  async get(id) {
    const formaPagamento = await (0, _typeorm.getRepository)(_formaPagamento.default);
    let nomeTexto;
    const pagamento = await formaPagamento.findOne({
      where: {
        forpagid: Number(id)
      }
    });

    if (pagamento) {
      nomeTexto = pagamento.forpagnome;
    } // nomeTexto  = await formaPagamento
    // .createQueryBuilder()
    // .select("nome")
    // .where({ id })
    // .getOne();


    return nomeTexto;
  }

}

var _default = FormaPagamentoController;
exports.default = _default;