import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProdutos1606703354880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'produtos',
                columns: [
                    {
                        name: 'produid',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'

                    },
                    {
                        name: 'producodigo',
                        type: 'varchar'
                    },

                    {
                        name: 'produnome',
                        type: 'varchar',

                    },
                    {
                        name: 'producusto',
                        type: 'decimal',
                        precision: 10,
                        scale: 4,
                    },
                    {
                        name: 'produvalorvenda',
                        type: 'decimal',
                        precision: 10,
                        scale: 4,
                    },
                    {
                        name: 'produestoqueMin',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'produestoqueMax',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'produembalagem',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'produquantidade',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'produdescricao',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'produdescricaogeral',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'produidgrupo',
                        type: 'int',
                        isNullable: true,



                    },
                    {
                        name: 'produimagem',
                        type: 'varchar',
                        isNullable: true
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
                        name: 'foreignKeygrup',
                        referencedTableName: 'subgrupoprodutos',
                        referencedColumnNames: ['subgrupoproid'],
                        columnNames: ['produidgrupo'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },



                ],

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("produtos", "foreignKeygrup");
        await queryRunner.dropTable('produtos')
    }

}

