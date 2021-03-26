"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _itemVenda = _interopRequireDefault(require("../../models/itemVenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ItemVendasController {
  async execute({
    id_vendas,
    ordem,
    codigo_produto,
    nome_produto,
    id_produtos,
    qtdvendido,
    valor_vendido,
    status
  }) {
    const vendaRepository = (0, _typeorm.getRepository)(_itemVenda.default);
    const itemvenda = await vendaRepository.create({
      itvidvendas: id_vendas,
      itvordem: ordem,
      itvnomeproduto: nome_produto,
      itvidprodutos: id_produtos,
      itvqtdvendido: qtdvendido,
      itvvalorvendido: valor_vendido,
      itvcodigoproduto: codigo_produto,
      itvstatus: status
    });
    await vendaRepository.save(itemvenda);
    return itemvenda;
  }

  async update(id, qtdvendido, valor_vendido) {
    const repositoryItemVenda = (0, _typeorm.getRepository)(_itemVenda.default);
    const checkItemVenda = await repositoryItemVenda.createQueryBuilder().update().set({
      itvqtdvendido: qtdvendido,
      itvvalorvendido: valor_vendido
    }).where({
      itvid: Number(id)
    }).execute();
    const itemvenda = repositoryItemVenda.findOne({
      itvid: Number(id)
    });
    return itemvenda;
  }

  async updatePorCodigo(codigo_produto, qtdvendido, valor_vendido) {
    const vendaRepository = (0, _typeorm.getRepository)(_itemVenda.default);
    let checkProduto = await vendaRepository.findOne({
      where: {
        itvcodigoproduto: codigo_produto
      }
    });
    let produto;

    if (checkProduto) {
      checkProduto.itvcodigoproduto = codigo_produto;
      checkProduto.itvqtdvendido = qtdvendido;
      checkProduto.itvvalorvendido = valor_vendido;
      vendaRepository.save(checkProduto);
      console.log(checkProduto);
    }

    produto = checkProduto;
    return checkProduto;
  }

  async delete(id) {
    const deleteItemVendas = (0, _typeorm.getRepository)(_itemVenda.default);
    await deleteItemVendas.createQueryBuilder().delete().where({
      itvid: Number(id)
    }).execute();
  }

  async getAll() {
    const itemVendaRepository = await (0, _typeorm.getRepository)(_itemVenda.default);
    const itemVenda = await itemVendaRepository.find();
    return itemVenda;
  }

  async getAllStatus() {
    const itemVendaRepository = await (0, _typeorm.getRepository)(_itemVenda.default);
    const itemVenda = await itemVendaRepository.createQueryBuilder().where({
      itvstatus: "2"
    }).getMany();
    let itens = [itemVenda];
    return itemVenda;
  }

  async get(id) {
    const itemRepository = await (0, _typeorm.getRepository)(_itemVenda.default);
    const itemVendas = await itemRepository.findOne({
      where: {
        itvid: Number(id)
      }
    });
    return itemVendas;
  }

  async getVercodigo(codigo_produto) {
    const itemRepository = await (0, _typeorm.getRepository)(_itemVenda.default);
    const itemVendas = await itemRepository.findOne({
      where: {
        itvcodigoproduto: codigo_produto
      }
    });
    return itemVendas;
  }

  async soma(id) {
    const somaPorVenda = (0, _typeorm.getRepository)(_itemVenda.default);
    const {
      sum
    } = await somaPorVenda.createQueryBuilder().select("SUM (itvvalorvendido)", "sum").where({
      itvidvendas: Number(id)
    }).getRawOne();
    return sum;
  }

}

var _default = ItemVendasController;
exports.default = _default;