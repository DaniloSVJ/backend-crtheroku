import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFormaPagamentoVenda1606704536100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'formapagamentovenda',
                    columns: [
                        {
                            name: 'fpvid',
                            type: 'int',
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment'


                        },
                        {
                            name: 'fpvvalor',
                            type: 'decimal',
                            precision: 10,
                            scale: 4,
                        },
                        {
                            name: 'fpvidvenda',
                            type: 'int',
                        },
                        {
                            name: 'fpvidforpag',
                            type: 'int',
                            isNullable: true,

                        },
                        {
                            name: 'fpvordem',
                            type: 'int',
                        },
                        {
                            name: 'fpvformapagamento',
                            type: 'varchar',
                        },
                        {
                            name: 'fpvstatus',
                            type: 'boolean',
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()',
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp',
                            default: 'now()',
                        },


                    ],
                    foreignKeys: [

                        {

                            name: 'foreignKeyForma',
                            referencedTableName: 'formapagamento',
                            referencedColumnNames: ['forpagid'],
                            columnNames: ['fpvidforpag'],
                            onDelete: 'SET NULL',
                            onUpdate: 'CASCADE',

                        }
                    ]

                })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("formapagamentovenda", "foreignKeyV");
        await queryRunner.dropForeignKey("formapagamentovenda", "foreignKeyForma");
        await queryRunner.dropTable('formapagamentovenda');
    }

}
