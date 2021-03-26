"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

var _produtos = _interopRequireDefault(require("../../models/produtos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateProduto {
  async execute({
    nome,
    codigo,
    custo,
    valor_venda,
    id_grupo,
    estoqueMin,
    estoqueMax,
    embalagem,
    quantidade,
    descricaoR,
    descricaoGeral
  }) {
    const produdoRepository = (0, _typeorm.getRepository)(_produtos.default);
    const checkProdutoExist = await produdoRepository.findOne({
      where: {
        produnome: nome
      }
    });

    if (checkProdutoExist) {
      throw new _AppErro.default('Name product already used');
    }

    const produto = produdoRepository.create({
      produnome: nome,
      producodigo: codigo,
      producusto: custo,
      produvalorvenda: valor_venda,
      produidgrupo: id_grupo,
      produestoqueMin: estoqueMin,
      produestoqueMax: estoqueMax,
      produembalagem: embalagem,
      produquantidade: quantidade,
      produdescricao: descricaoR,
      produdescricaoGeral: descricaoGeral
    });
    await produdoRepository.save(produto);
    return produto;
  }

  async update(id, nome, codigo, custo, valor_venda, id_grupo) {
    const repositoryProduto = (0, _typeorm.getRepository)(_produtos.default);
    let checkProduto = await repositoryProduto.findOne({
      where: {
        produid: Number(id)
      }
    });
    let produto;

    if (checkProduto) {
      checkProduto.produnome = nome;
      checkProduto.producodigo = codigo;
      checkProduto.producusto = custo;
      checkProduto.produvalorvenda = valor_venda;
      checkProduto.produidgrupo = id_grupo;
      repositoryProduto.save(checkProduto);
    }

    produto = checkProduto;
    return produto;
  }

  async delete(id) {
    const grupoRepository = (0, _typeorm.getRepository)(_produtos.default);
    await grupoRepository.createQueryBuilder().delete().where({
      produid: Number(id)
    }).execute();
  }

  async getAll() {
    const estoqueRepository = await (0, _typeorm.getRepository)(_produtos.default);
    const produtos = await estoqueRepository.find();
    return produtos;
  }

  async get(codigo) {
    const estoqueRepository = await (0, _typeorm.getRepository)(_produtos.default);
    let produtos = await estoqueRepository.findOne({
      where: {
        producodigo: codigo
      }
    });

    if (produtos) {
      return produtos;
    }
  }

}

var _default = CreateProduto;
exports.default = _default;