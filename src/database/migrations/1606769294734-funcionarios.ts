import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class funcionarios1606769294734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({

                name: 'vendedor',
                columns: [
                    {
                        name: 'venddorid',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'

                    },
                    {
                        name: 'venddornome',
                        type: 'varchar'
                    },
                    {
                        name: 'venddorCPF',
                        type: 'varchar'
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
        await queryRunner.dropTable('vendedor');
    }

}

