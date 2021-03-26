"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

var _teste = _interopRequireDefault(require("../../models/teste"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateGrupoProduto {
  async execute(nome) {
    const testeRepo = (0, _typeorm.getRepository)(_teste.default);
    const checkNametesteRepo = await testeRepo.findOne({
      where: {
        nome
      }
    });

    if (checkNametesteRepo) {
      throw new _AppErro.default('Name grupo already used');
    }

    const grupoProduto = await testeRepo.create({
      nome
    });
    await testeRepo.save(grupoProduto);
    return grupoProduto;
  }

}

var _default = CreateGrupoProduto;
exports.default = _default;