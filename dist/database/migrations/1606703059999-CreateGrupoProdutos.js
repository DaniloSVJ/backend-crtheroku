"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateGrupoProdutos1606703059999 = void 0;

var _typeorm = require("typeorm");

class CreateGrupoProdutos1606703059999 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'subgrupoprodutos',
      columns: [{
        name: 'subgrupoproid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'subgrupopronome',
        type: 'varchar'
      }, {
        name: 'subgrupoproidgrupopro',
        type: 'int'
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
    await queryRunner.dropTable('subgrupoprodutos');
  }

}

exports.CreateGrupoProdutos1606703059999 = CreateGrupoProdutos1606703059999;