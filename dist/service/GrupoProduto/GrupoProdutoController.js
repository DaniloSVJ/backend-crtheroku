"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

var _grupoProdutos = _interopRequireDefault(require("../../models/grupoProdutos."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateGrupoProduto {
  async execute(nome) {
    const grupoRepository = (0, _typeorm.getRepository)(_grupoProdutos.default);
    const checkNameGrup = await grupoRepository.findOne({
      where: {
        grupopronome: nome
      }
    });

    if (checkNameGrup) {
      throw new _AppErro.default('Name grupo already used');
    }

    const grupoProduto = await grupoRepository.create({
      grupopronome: nome
    });
    await grupoRepository.save(grupoProduto);
    return grupoProduto;
  }

  async update(id, nome) {
    const repositoryGrupoProduto = (0, _typeorm.getRepository)(_grupoProdutos.default);
    const checkNameGrup = await repositoryGrupoProduto.findOne({
      where: {
        grupoproid: Number(id)
      }
    });
    let grupo;

    if (checkNameGrup) {
      grupo = await repositoryGrupoProduto.createQueryBuilder().update().set({
        grupopronome: nome
      }).where({
        grupoproid: Number(id)
      }).execute();
    }

    return grupo;
  }

  async delete(id) {
    const grupoRepository = (0, _typeorm.getRepository)(_grupoProdutos.default);
    await grupoRepository.createQueryBuilder().delete().where({
      grupoproid: Number(id)
    }).execute();
  }

  async getAll() {
    const estoqueRepository = await (0, _typeorm.getRepository)(_grupoProdutos.default);
    const produtos = await estoqueRepository.find();
    return produtos;
  }

  async get(id) {
    const estoqueRepository = await (0, _typeorm.getRepository)(_grupoProdutos.default);
    const produtos = await estoqueRepository.findOne({
      where: {
        grupoproid: Number(id)
      }
    });
    return produtos;
  }

}

var _default = CreateGrupoProduto;
exports.default = _default;