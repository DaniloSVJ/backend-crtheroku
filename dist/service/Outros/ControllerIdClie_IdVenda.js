"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

var _IdCli_IdCaixa = _interopRequireDefault(require("../../models/IdCli_IdCaixa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateIDsRepository {
  async execute(idCliente, idcaixa) {
    const IdsRepository = (0, _typeorm.getRepository)(_IdCli_IdCaixa.default);
    const checkNameGrup = await IdsRepository.findOne({
      where: {
        idCliente
      }
    });

    if (checkNameGrup) {
      throw new _AppErro.default('Name grupo already used');
    }

    const grupoProduto = await IdsRepository.create({
      idCliente,
      idcaixa
    });
    await IdsRepository.save(grupoProduto);
    return grupoProduto;
  }

  async update(idCliente, idcaixa) {
    const IdsRepository = (0, _typeorm.getRepository)(_IdCli_IdCaixa.default);
    const idcli = Number(idCliente);
    let ids = await IdsRepository.createQueryBuilder().update().set({
      idCliente: idcli,
      idcaixa
    }).where({
      idCliente
    }).execute();
    return ids;
  }

  async delete(id) {
    const grupoRepository = (0, _typeorm.getRepository)(_IdCli_IdCaixa.default);
    await grupoRepository.createQueryBuilder().delete().where({
      idCliente: Number(id)
    }).execute();
  }

  async getAll() {
    const estoqueRepository = await (0, _typeorm.getRepository)(_IdCli_IdCaixa.default);
    const produtos = await estoqueRepository.find();
    return produtos;
  }

  async get(id) {
    const estoqueRepository = await (0, _typeorm.getRepository)(_IdCli_IdCaixa.default);
    const produtos = await estoqueRepository.findOne({
      where: {
        idCliente: Number(id)
      }
    });
    return produtos;
  }

}

var _default = CreateIDsRepository;
exports.default = _default;