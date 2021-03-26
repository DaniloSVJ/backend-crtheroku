"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFormaPagamentoVenda1606704536100 = void 0;

var _typeorm = require("typeorm");

class CreateFormaPagamentoVenda1606704536100 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'formapagamentovenda',
      columns: [{
        name: 'fpvid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'fpvvalor',
        type: 'decimal',
        precision: 10,
        scale: 4
      }, {
        name: 'fpvidvenda',
        type: 'int'
      }, {
        name: 'fpvidforpag',
        type: 'int',
        isNullable: true
      }, {
        name: 'fpvordem',
        type: 'int'
      }, {
        name: 'fpvformapagamento',
        type: 'varchar'
      }, {
        name: 'fpvstatus',
        type: 'boolean'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }],
      foreignKeys: [{
        name: 'foreignKeyForma',
        referencedTableName: 'formapagamento',
        referencedColumnNames: ['forpagid'],
        columnNames: ['fpvidforpag'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("formapagamentovenda", "foreignKeyV");
    await queryRunner.dropForeignKey("formapagamentovenda", "foreignKeyForma");
    await queryRunner.dropTable('formapagamentovenda');
  }

}

exports.CreateFormaPagamentoVenda1606704536100 = CreateFormaPagamentoVenda1606704536100;