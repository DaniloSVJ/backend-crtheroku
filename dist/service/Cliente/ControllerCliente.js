"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

var _clients = _interopRequireDefault(require("../../models/clients"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Clientes {
  async execute({
    nome,
    CPF,
    RG,
    telefone,
    endereco,
    numero,
    cep,
    bairro,
    cidade,
    uf,
    isAtivado
  }) {
    const repositoryCliente = (0, _typeorm.getRepository)(_clients.default);
    const checkCliente = await repositoryCliente.findOne({
      where: {
        cliCPF: CPF
      }
    });

    if (checkCliente) {
      throw new _AppErro.default('CPF já cadastrado');
    }

    const cliente = repositoryCliente.create({
      clinome: nome,
      cliCPF: CPF,
      cliRG: RG,
      clitelefone: telefone,
      cliendereco: endereco,
      clienumero: numero,
      clicep: cep,
      clibairro: bairro,
      clicidade: cidade,
      cliuf: uf,
      isAtivado
    });
    await repositoryCliente.save(cliente);
    return cliente;
  }

  async update(id, nome, CPF, RG, telefone, cep, bairro, cidade, uf, isAtivado) {
    const repositoryCliente = (0, _typeorm.getRepository)(_clients.default);
    const checkCliente = await repositoryCliente.findOne({
      where: {
        cliid: Number(id)
      }
    });

    if (checkCliente) {
      checkCliente.cliCPF = CPF, checkCliente.clinome = nome, checkCliente.cliRG = RG, checkCliente.clitelefone = telefone, checkCliente.clicep = cep, checkCliente.clibairro = bairro, checkCliente.clicidade = cidade, checkCliente.cliuf = uf;
      checkCliente.isAtivado = isAtivado;
      repositoryCliente.save(checkCliente);
    }

    const cliente = checkCliente;
    return cliente;
  }

  async delete(id) {
    const grupoRepository = (0, _typeorm.getRepository)(_clients.default);
    await grupoRepository.createQueryBuilder().delete().where({
      cliid: id
    }).execute();
  }

  async getAll() {
    const clienteRepository = await (0, _typeorm.getRepository)(_clients.default);
    const clientes = await clienteRepository.find();
    return clientes;
  }

  async get(id) {
    const clienteRepository = await (0, _typeorm.getRepository)(_clients.default);
    const produtos = await clienteRepository.findOne({
      where: {
        cliid: Number(id)
      }
    });
    return produtos;
  }

}

var _default = Clientes;
exports.default = _default;