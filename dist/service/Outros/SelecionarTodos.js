"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _produtos = _interopRequireDefault(require("../../models/produtos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class getProdutos {
  async execute() {
    const estoqueRepository = await (0, _typeorm.getRepository)(_produtos.default);
    const produtos = await estoqueRepository.findAndCount();
    return produtos;
  }

}

var _default = getProdutos;
exports.default = _default;