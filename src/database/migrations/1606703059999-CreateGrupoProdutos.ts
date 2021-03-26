import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGrupoProdutos1606703059999 implements MigrationInterface {



    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({

                name: 'subgrupoprodutos',
                columns: [
                    {
                        name: 'subgrupoproid',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'

                    },
                    {
                        name: 'subgrupopronome',
                        type: 'varchar'
                    },
                    {
                        name: 'subgrupoproidgrupopro',
                        type: 'int'
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



                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subgrupoprodutos');
    }

}

