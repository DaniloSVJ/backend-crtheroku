"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFormaItemVenda1606704553170 = void 0;

var _typeorm = require("typeorm");

class CreateFormaItemVenda1606704553170 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'itemsvendas',
      columns: [{
        name: 'itvid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'itvnomeproduto',
        type: 'varchar'
      }, {
        name: 'itvcodigoproduto',
        type: 'varchar'
      }, {
        name: 'itvordem',
        type: 'decimal'
      }, {
        name: 'itvqtdvendido',
        type: 'decimal',
        precision: 10,
        scale: 3
      }, {
        name: 'itvvalorvendido',
        type: 'decimal',
        precision: 10,
        scale: 4
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'itvidvendas',
        type: 'int'
      }, {
        name: 'itvidprodutos',
        type: 'int',
        isNullable: true
      }, {
        name: 'itvstatus',
        type: 'decimal'
      }, {
        name: 'isAtivado',
        type: 'boolean',
        isNullable: true
      }],
      foreignKeys: [{
        name: 'foreignKeyPrduto',
        referencedTableName: 'produtos',
        referencedColumnNames: ['produid'],
        columnNames: ['itvidprodutos']
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("itemsvendas", "foreignKeyVenda");
    await queryRunner.dropForeignKey("itemsvendas", "foreignKeyPrduto");
    await queryRunner.dropTable('itemsvendas');
  }

}

exports.CreateFormaItemVenda1606704553170 = CreateFormaItemVenda1606704553170;