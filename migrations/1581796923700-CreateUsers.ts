import {MigrationInterface, QueryRunner, Table, TableIndex, Timestamp} from 'typeorm';

export class CreateUsers1581796923700 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table(
        {
          name: 'user',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'username',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'password',
              type: 'varchar',
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
        }), true,
      );

      // Index the username column for faster lookups
      await queryRunner.createIndex('user', new TableIndex({
        name: 'IDX_USER_USERNAME',
        columnNames: ['username'],
      }));
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropIndex('user', 'IDX_USER_USERNAME');
      await queryRunner.dropTable('user', true);
    }

}
