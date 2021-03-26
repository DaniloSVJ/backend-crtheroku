"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProdutos1606703354880 = void 0;

var _typeorm = require("typeorm");

class CreateProdutos1606703354880 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'produtos',
      columns: [{
        name: 'produid',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'producodigo',
        type: 'varchar'
      }, {
        name: 'produnome',
        type: 'varchar'
      }, {
        name: 'producusto',
        type: 'decimal',
        precision: 10,
        scale: 4
      }, {
        name: 'produvalorvenda',
        type: 'decimal',
        precision: 10,
        scale: 4
      }, {
        name: 'produestoqueMin',
        type: 'int',
        isNullable: true
      }, {
        name: 'produestoqueMax',
        type: 'int',
        isNullable: true
      }, {
        name: 'produembalagem',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'produquantidade',
        type: 'int',
        isNullable: true
      }, {
        name: 'produdescricao',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'produdescricaogeral',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'produidgrupo',
        type: 'int',
        isNullable: true
      }, {
        name: 'produimagem',
        type: 'varchar',
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
        name: 'foreignKeygrup',
        referencedTableName: 'subgrupoprodutos',
        referencedColumnNames: ['subgrupoproid'],
        columnNames: ['produidgrupo'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("produtos", "foreignKeygrup");
    await queryRunner.dropTable('produtos');
  }

}

exports.CreateProdutos1606703354880 = CreateProdutos1606703354880;