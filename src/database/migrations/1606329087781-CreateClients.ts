import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateClients1606329087781

    implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'clientes',
                columns: [
                    {
                        name: 'cliid',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'


                    },
                    {
                        name: "clinome",
                        type: 'varchar',

                    },
                    {
                        name: "cliendereco",
                        type: 'varchar',

                    },
                    {
                        name: "clienumero",
                        type: 'varchar',

                    },
                    {
                        name: 'clibairro',
                        type: 'varchar',
                    },
                    {
                        name: 'clicep',
                        type: 'varchar'
                    },
                    {

                        name: 'clicidade',
                        type: 'varchar',

                    },
                    {
                        name: 'cliuf',
                        type: 'varchar'
                    },
                    {
                        name: 'clitelefone',
                        type: 'varchar'
                    },
                    {
                        name: 'cliCPF',
                        type: 'varchar',
                    },
                    {
                        name: 'cliRG',
                        type: 'varchar'
                    },
                    {
                        name: 'isAtivado',
                        type: 'boolean',
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

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients")
    }

}
