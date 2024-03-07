import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Createfamilies1709715865827 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "families",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "family_name",
            type: "varchar",
            length: "255",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
        },
        {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
        },
        ],
        
       
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropTable("families");
  }
}
