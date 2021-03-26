"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _itemVendaAcessoria = _interopRequireDefault(require("../../models/itemVendaAcessoria"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ItemVendasController {
  async execute({
    id_vendas,
    ordem,
    codigo_produto,
    nome_produto,
    id_produtos,
    qtdvendido,
    valor_vendido
  }) {
    const vendaRepository = (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    const itemvenda = await vendaRepository.create({
      id_vendas,
      ordem,
      nome_produto,
      id_produtos,
      qtdvendido,
      valor_vendido,
      codigo_produto
    });
    await vendaRepository.save(itemvenda);
    return itemvenda;
  }

  async update(id, qtdvendido, valor_vendido) {
    const repositoryItemVenda = (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    const checkItemVenda = await repositoryItemVenda.createQueryBuilder().update().set({
      qtdvendido: qtdvendido,
      valor_vendido: valor_vendido
    }).where({
      id: Number(id)
    }).execute();
    const itemvenda = repositoryItemVenda.findOne({
      id: Number(id)
    });
    return itemvenda;
  }

  async updatePorCodigo(codigo_produto, qtdvendido, valor_vendido) {
    const vendaRepository = (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    let checkProduto = await vendaRepository.findOne({
      where: {
        codigo_produto
      }
    });
    let produto;

    if (checkProduto) {
      checkProduto.codigo_produto = codigo_produto;
      checkProduto.qtdvendido = qtdvendido;
      checkProduto.valor_vendido = valor_vendido;
      vendaRepository.save(checkProduto);
      console.log(checkProduto);
    }

    produto = checkProduto;
    return checkProduto;
  }

  async delete(id) {
    const deleteItemVendas = (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    await deleteItemVendas.createQueryBuilder().delete().where({
      id: Number(id)
    }).execute();
  }

  async deleteAll() {
    const deleteItemVendas = (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    await deleteItemVendas.createQueryBuilder().delete().execute();
  }

  async getAll() {
    const itemVendaRepository = await (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    const itemVenda = await itemVendaRepository.find();
    return itemVenda;
  }

  async get(id) {
    const itemRepository = await (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    const itemVendas = await itemRepository.findOne({
      where: {
        id: Number(id)
      }
    });
    return itemVendas;
  }

  async getVercodigo(codigo_produto) {
    const itemRepository = await (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    const itemVendas = await itemRepository.findOne({
      where: {
        codigo_produto
      }
    });
    return itemVendas;
  }

  async soma(id) {
    const somaPorVenda = (0, _typeorm.getRepository)(_itemVendaAcessoria.default);
    const {
      sum
    } = await somaPorVenda.createQueryBuilder().select("SUM (valor_vendido)", "sum").where({
      id_vendas: Number(id)
    }).getRawOne();
    return sum;
  }

}

var _default = ItemVendasController;
exports.default = _default;