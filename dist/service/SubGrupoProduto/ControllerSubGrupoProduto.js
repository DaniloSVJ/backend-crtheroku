"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

var _subgrupoProdutos = _interopRequireDefault(require("../../models/subgrupoProdutos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateGrupoProduto {
  async execute(nome, idgrupo) {
    const grupoRepository = (0, _typeorm.getRepository)(_subgrupoProdutos.default);
    const checkNameGrup = await grupoRepository.findOne({
      where: {
        subgrupopronome: nome
      }
    });

    if (checkNameGrup) {
      throw new _AppErro.default('Name grupo already used');
    }

    const grupoProduto = await grupoRepository.create({
      subgrupopronome: nome,
      subgrupoproidgrupopro: idgrupo
    });
    await grupoRepository.save(grupoProduto);
    return grupoProduto;
  }

  async update(id, idgrupo, nome) {
    const repositoryGrupoProduto = (0, _typeorm.getRepository)(_subgrupoProdutos.default);
    const checkNameGrup = await repositoryGrupoProduto.findOne({
      where: {
        grupoproid: Number(id)
      }
    });
    let grupo;

    if (checkNameGrup) {
      grupo = await repositoryGrupoProduto.createQueryBuilder().update().set({
        subgrupopronome: nome,
        subgrupoproidgrupopro: Number(idgrupo)
      }).where({
        subgrupoproid: Number(id)
      }).execute();
    }

    return grupo;
  }

  async delete(id) {
    const grupoRepository = (0, _typeorm.getRepository)(_subgrupoProdutos.default);
    await grupoRepository.createQueryBuilder().delete().where({
      subgrupoproid: Number(id)
    }).execute();
  }

  async getAll() {
    const estoqueRepository = await (0, _typeorm.getRepository)(_subgrupoProdutos.default);
    const produtos = await estoqueRepository.find();
    return produtos;
  }

  async get(id) {
    const estoqueRepository = await (0, _typeorm.getRepository)(_subgrupoProdutos.default);
    const produtos = await estoqueRepository.findOne({
      where: {
        subgrupoproid: Number(id)
      }
    });
    return produtos;
  }

}

var _default = CreateGrupoProduto;
exports.default = _default;