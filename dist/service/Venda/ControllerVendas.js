"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _vendas = _interopRequireDefault(require("../../models/vendas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContreollerVenda {
  async execute(id_cliente, vendedor) {
    const vendaRepository = (0, _typeorm.getRepository)(_vendas.default);
    const vendaProduto = await vendaRepository.create({
      vendaidcliente: id_cliente,
      vendavendedor: vendedor
    });
    await vendaRepository.save(vendaProduto);
    return vendaProduto;
  }

  async update(id, id_cliente, vendedor) {
    const repositoryVenda = (0, _typeorm.getRepository)(_vendas.default);
    const checkCliente = await repositoryVenda.findOne({
      where: {
        vendaid: Number(id)
      }
    });
    let venda;

    if (checkCliente) {
      console.log(checkCliente.vendaid);
      venda = await repositoryVenda.createQueryBuilder().update().set({
        vendavendedor: vendedor,
        vendaidcliente: Number(id_cliente)
      }).where({
        vendaid: Number(id)
      }).execute();
    }

    return venda;
  }

  async delete(id) {
    const deleteVendas = (0, _typeorm.getRepository)(_vendas.default);
    await deleteVendas.createQueryBuilder().delete().where({
      vendaid: Number(id)
    }).execute();
  }

  async getAll() {
    const estoqueRepository = await (0, _typeorm.getRepository)(_vendas.default);
    const produtos = await estoqueRepository.find();
    return produtos;
  }

  async get(id) {
    const estoqueRepository = await (0, _typeorm.getRepository)(_vendas.default);
    const produtos = await estoqueRepository.findOne({
      where: {
        vendaid: Number(id)
      }
    });
    return produtos;
  }

}

var _default = ContreollerVenda;
exports.default = _default;