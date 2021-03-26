"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDadosIds1610632470248 = void 0;

var _typeorm = require("typeorm");

class CreateDadosIds1610632470248 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'idCli_idCaixa',
      columns: [{
        name: 'idCli',
        type: 'int'
      }, {
        name: 'idCaixa',
        type: 'int'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('idCli_idCaixa');
  }

}

exports.CreateDadosIds1610632470248 = CreateDadosIds1610632470248;