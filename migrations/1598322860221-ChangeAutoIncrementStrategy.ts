import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeAutoIncrementStrategy1598322860221
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.changeColumn(
      'users',
      'id',
      new TableColumn({
        name: 'id',
        type: 'integer', // instead of 'int', required for the increment strategy
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment', // thought this was the default
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.changeColumn(
      'users',
      'id',
      new TableColumn({
        name: 'id',
        type: 'int',
        isPrimary: true,
      }),
    );
  }
}
