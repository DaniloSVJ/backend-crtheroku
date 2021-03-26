"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateVenda1606704044230 = void 0;

var _typeorm = require("typeorm");

class CreateVenda1606704044230 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'vendas',
      columns: [{
        name: 'vendaid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'vendavendedor',
        type: 'varchar'
      }, {
        name: 'vendaidcliente',
        type: 'int',
        isNullable: true
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
        name: 'foreignKeyCli',
        referencedTableName: "clientes",
        referencedColumnNames: ['cliid'],
        columnNames: ["vendaidcliente"],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("vendas", "foreignKeyCli");
    await queryRunner.dropTable('vendas');
  }

}

exports.CreateVenda1606704044230 = CreateVenda1606704044230;