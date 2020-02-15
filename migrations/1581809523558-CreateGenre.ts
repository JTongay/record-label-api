import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateGenre1581809523558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table(
        {
          name: 'genre',
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
          ],
        },
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
