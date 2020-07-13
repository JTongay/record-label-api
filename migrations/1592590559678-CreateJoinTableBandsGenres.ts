import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateJoinTableBandsGenres1592590559678
  implements MigrationInterface {
  bandForeignKey: TableForeignKey = new TableForeignKey({
    columnNames: ['band_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'band',
    onDelete: 'CASCADE',
  });

  genreForeignKey: TableForeignKey = new TableForeignKey({
    columnNames: ['genre_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'genre',
    onDelete: 'CASCADE',
  });
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'bands_genres',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'genre_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'band_id',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKeys('bands_genres', [
      this.bandForeignKey,
      this.genreForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('bands_genres', [
      this.bandForeignKey,
      this.genreForeignKey,
    ]);
    await queryRunner.dropTable('bands_genres', true);
  }
}
