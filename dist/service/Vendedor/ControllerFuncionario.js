"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

var _funcionario = _interopRequireDefault(require("../../models/funcionario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VendedorController {
  async execute(nome, cpf) {
    const vendedorRepository = (0, _typeorm.getRepository)(_funcionario.default);
    const checkCPF = await vendedorRepository.findOne({
      where: {
        venddorcpf: cpf
      }
    });

    if (checkCPF) {
      throw new _AppErro.default('CPF Funcionario already used');
    }

    const vendedor = await vendedorRepository.create({
      venddorcpf: cpf,
      venddornome: nome
    });
    await vendedorRepository.save(vendedor);
    return vendedor;
  }

  async update(id, nome, cpf) {
    const repositorVendedor = (0, _typeorm.getRepository)(_funcionario.default);
    const checkCPF = await repositorVendedor.findOne({
      where: {
        venddorid: id
      }
    });
    let vendedor;

    if (checkCPF) {
      vendedor = await repositorVendedor.createQueryBuilder().update().set({
        venddornome: nome,
        venddorcpf: cpf
      }).where({
        venddorid: Number(id)
      }).execute();
    }

    return vendedor;
  }

  async delete(id) {
    const repositorVendedor = (0, _typeorm.getRepository)(_funcionario.default);
    await repositorVendedor.createQueryBuilder().delete().where({
      venddorid: Number(id)
    }).execute();
  }

  async getAll() {
    const repositorVendedor = await (0, _typeorm.getRepository)(_funcionario.default);
    const vendedor = await repositorVendedor.find();
    return vendedor;
  }

  async get(id) {
    const repositorVendedor = await (0, _typeorm.getRepository)(_funcionario.default);
    const funcionario = await repositorVendedor.findOne({
      where: {
        venddorid: Number(id)
      }
    });
    return funcionario;
  }

}

var _default = VendedorController;
exports.default = _default;