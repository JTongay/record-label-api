import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createBands1589739029896 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'band',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date_formed',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'insert_date',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'updated_date',
            type: 'timestamp',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('band', true);
  }
}
