import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeAutoIncrementStrategyForAll1598462245607
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'band',
      'id',
      new TableColumn({
        name: 'id',
        type: 'integer', // instead of 'int', required for the increment strategy
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment', // thought this was the default
      }),
    );

    await queryRunner.changeColumn(
      'genre',
      'id',
      new TableColumn({
        name: 'id',
        type: 'integer', // instead of 'int', required for the increment strategy
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment', // thought this was the default
      }),
    );

    await queryRunner.changeColumn(
      'bands_genres',
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'band',
      'id',
      new TableColumn({
        name: 'id',
        type: 'int',
        isPrimary: true,
      }),
    );

    await queryRunner.changeColumn(
      'genre',
      'id',
      new TableColumn({
        name: 'id',
        type: 'int',
        isPrimary: true,
      }),
    );

    await queryRunner.changeColumn(
      'bands_genres',
      'id',
      new TableColumn({
        name: 'id',
        type: 'int',
        isPrimary: true,
      }),
    );
  }
}
