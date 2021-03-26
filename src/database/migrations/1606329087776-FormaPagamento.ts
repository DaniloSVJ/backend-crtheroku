import { getTime } from "date-fns";
import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { getTokenSourceMapRange } from "typescript";

export class FormaPagamento1606147649112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'formapagamento',
                columns: [
                    {
                        name: 'forpagid',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'

                    },
                    {
                        name: 'forpagnome',
                        type: 'varchar'
                    },
                    {
                        name: 'forpaordem',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
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
        await queryRunner.dropTable('formapagamento');
    }

}
