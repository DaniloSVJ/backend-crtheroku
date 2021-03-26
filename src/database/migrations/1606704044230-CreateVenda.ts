import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVenda1606704044230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'vendas',
                columns: [
                    {
                        name: 'vendaid',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'

                    },


                    {
                        name: 'vendavendedor',
                        type: 'varchar',
                    },

                    {
                        name: 'vendaidcliente',
                        type: 'int',
                        isNullable: true,


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
                        name: 'foreignKeyCli',

                        referencedTableName: "clientes",
                        referencedColumnNames: ['cliid'],
                        columnNames: ["vendaidcliente"],


                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("vendas", "foreignKeyCli");
        await queryRunner.dropTable('vendas');
    }

}
