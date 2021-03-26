"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateClients1606329087781 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'clientes',
      columns: [{
        name: 'cliid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "clinome",
        type: 'varchar'
      }, {
        name: "cliendereco",
        type: 'varchar'
      }, {
        name: "clienumero",
        type: 'varchar'
      }, {
        name: 'clibairro',
        type: 'varchar'
      }, {
        name: 'clicep',
        type: 'varchar'
      }, {
        name: 'clicidade',
        type: 'varchar'
      }, {
        name: 'cliuf',
        type: 'varchar'
      }, {
        name: 'clitelefone',
        type: 'varchar'
      }, {
        name: 'cliCPF',
        type: 'varchar'
      }, {
        name: 'cliRG',
        type: 'varchar'
      }, {
        name: 'isAtivado',
        type: 'boolean',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("clients");
  }

}

exports.default = CreateClients1606329087781;