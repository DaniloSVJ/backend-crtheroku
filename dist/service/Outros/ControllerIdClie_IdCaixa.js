"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _IdCil_idCaixa = _interopRequireDefault(require("../../models/IdCil_idCaixa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateIDsRepository {
  async execute(idCli, idCaixa) {
    const IdsRepository = (0, _typeorm.getRepository)(_IdCil_idCaixa.default); //console.log("ta id: " + idCli)

    const grupoProduto = await IdsRepository.create({
      idCli,
      idCaixa
    });
    await IdsRepository.save(grupoProduto);
    return grupoProduto;
  }

  async update(idcl, idcx) {
    const IdsRepository = (0, _typeorm.getRepository)(_IdCil_idCaixa.default);
    const idCli = Number(idcl);
    const idCaixa = Number(idcx);
    let ids = await IdsRepository.createQueryBuilder().update().set({
      idCli,
      idCaixa
    }).execute();
    return ids;
  }

  async updateCaixa(idCaixa, idCli) {
    const IdsRepository = (0, _typeorm.getRepository)(_IdCil_idCaixa.default);
    const idCai = Number(idCaixa);
    let ids = await IdsRepository.createQueryBuilder().update().set({
      idCli
    }).where({
      idCaixa: idCai
    }).execute();
    return ids;
  }

  async delete(id) {
    const grupoRepository = (0, _typeorm.getRepository)(_IdCil_idCaixa.default);
    await grupoRepository.createQueryBuilder().delete().where({
      idCli: Number(id)
    }).execute();
  }

  async getAll() {
    const estoqueRepository = await (0, _typeorm.getRepository)(_IdCil_idCaixa.default);
    const produtos = await estoqueRepository.find();
    return produtos;
  }

  async get(id) {
    const estoqueRepository = await (0, _typeorm.getRepository)(_IdCil_idCaixa.default);
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