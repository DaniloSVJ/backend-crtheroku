"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormaPagamento1606147649112 = void 0;

var _typeorm = require("typeorm");

class FormaPagamento1606147649112 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'formapagamento',
      columns: [{
        name: 'forpagid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'forpagnome',
        type: 'varchar'
      }, {
        name: 'forpaordem',
        type: 'int',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'datetime',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('formapagamento');
  }

}

exports.FormaPagamento1606147649112 = FormaPagamento1606147649112;