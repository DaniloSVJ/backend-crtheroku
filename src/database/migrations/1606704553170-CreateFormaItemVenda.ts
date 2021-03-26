import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFormaItemVenda1606704553170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'itemsvendas',
                columns: [
                    {
                        name: 'itvid',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'

                    },
                    {
                        name: 'itvnomeproduto',
                        type: 'varchar',
                    },

                    {
                        name: 'itvcodigoproduto',
                        type: 'varchar',
                    },
                    {
                        name: 'itvordem',
                        type: 'decimal',
                    },
                    {
                        name: 'itvqtdvendido',
                        type: 'decimal',
                        precision: 10,
                        scale: 3,
                    },
                    {
                        name: 'itvvalorvendido',
                        type: 'decimal',
                        precision: 10,
                        scale: 4,
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
                    {
                        name: 'itvidvendas',
                        type: 'int',

                    },
                    {
                        name: 'itvidprodutos',
                        type: 'int',
                        isNullable: true,


                    },
                    {
                        name: 'itvstatus',
                        type: 'decimal',
                    },
                    {
                        name: 'isAtivado',
                        type: 'boolean',
                        isNullable: true,
                    }

                ],
                foreignKeys: [
                    {

                        name: 'foreignKeyPrduto',
                        referencedTableName: 'produtos',
                        referencedColumnNames: ['produid'],
                        columnNames: ['itvidprodutos'],


                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("itemsvendas", "foreignKeyVenda");
        await queryRunner.dropForeignKey("itemsvendas", "foreignKeyPrduto");
        await queryRunner.dropTable('itemsvendas')
    }
}
