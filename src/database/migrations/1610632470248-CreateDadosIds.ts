import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDadosIds1610632470248 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({

                name: 'idCli_idCaixa',
                columns: [
                    {
                        name: 'idCli',
                        type: 'int',

                    },
                    {
                        name: 'idCaixa',
                        type: 'int'
                    },
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('idCli_idCaixa');
    }

}
