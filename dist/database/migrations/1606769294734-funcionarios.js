"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.funcionarios1606769294734 = void 0;

var _typeorm = require("typeorm");

class funcionarios1606769294734 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'vendedor',
      columns: [{
        name: 'venddorid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'venddornome',
        type: 'varchar'
      }, {
        name: 'venddorCPF',
        type: 'varchar'
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
    await queryRunner.dropTable('vendedor');
  }

}

exports.funcionarios1606769294734 = funcionarios1606769294734;