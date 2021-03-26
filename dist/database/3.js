"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFormaPagamentoVenda1606179721843 = void 0;

var _typeorm = require("typeorm");

class CreateFormaPagamentoVenda1606179721843 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'forma_pagamento_venda',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'valor',
        type: 'decimal',
        precision: 10,
        scale: 2
      }, {
        name: 'id_venda',
        type: 'uuid'
      }, {
        name: 'id_forma_pagmet',
        type: 'uuid'
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
        name: 'foreignKeyV',
        referencedTableName: 'vendas',
        referencedColumnNames: ['id'],
        columnNames: ['id_venda'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }, {
        name: 'foreignKeyForma',
        referencedTableName: 'forma_pagamento',
        referencedColumnNames: ['id'],
        columnNames: ['id_forma_pagmet'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("forma_pagamento_venda", "foreignKeyV");
    await queryRunner.dropForeignKey("forma_pagamento_venda", "foreignKeyForma");
    await queryRunner.dropTable('forma_pagamento');
  }

}

exports.CreateFormaPagamentoVenda1606179721843 = CreateFormaPagamentoVenda1606179721843;