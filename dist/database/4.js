"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateItemsVenda1606179291518 = void 0;

var _typeorm = require("typeorm");

class CreateItemsVenda1606179291518 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'items_vendas',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'qtdvendido',
        type: 'decimal',
        precision: 10,
        scale: 1
      }, {
        name: 'valor_vendido',
        type: 'decimal',
        precision: 10,
        scale: 2
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'id_vendas',
        type: 'uuid'
      }, {
        name: 'id_produtos',
        type: 'uuid'
      }],
      foreignKeys: [{
        name: 'foreignKeyVenda',
        referencedTableName: 'vendas',
        referencedColumnNames: ['id'],
        columnNames: ['id_vendas']
      }, {
        name: 'foreignKeyPrduto',
        referencedTableName: 'produtos',
        referencedColumnNames: ['id'],
        columnNames: ['id_produtos']
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("items_vendas", "foreignKeyVenda");
    await queryRunner.dropForeignKey("items_vendas", "foreignKeyPrduto");
    await queryRunner.dropTable('items_vendas');
  }

}

exports.CreateItemsVenda1606179291518 = CreateItemsVenda1606179291518;