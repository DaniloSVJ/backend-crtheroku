"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrupoPordutoGeral1611249012843 = void 0;

var _typeorm = require("typeorm");

class GrupoPordutoGeral1611249012843 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'grupoproduto',
      columns: [{
        name: 'grupoproid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'grupopronome',
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
    await queryRunner.dropTable('grupoproduto');
  }

}

exports.GrupoPordutoGeral1611249012843 = GrupoPordutoGeral1611249012843;