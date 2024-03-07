import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasks1709715865847  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "families_id",
            type: "int",
          },

          {
            name: "name_task",
            type: "varchar",
            length: "255",
          },
          {
            name: "task_date",
            type: "date",
          },

          {
            name: "hour",
            type: "varchar",
            length: "255",
          },
         
          {
            name: "status",
            type: "enum",
            enum: ["active", "inactive"],
            default: '"active"',
            isNullable:true,
        },

          {
            name: "active",
            type: "Tinyint",
            default: 1,
            length: "1",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["families_id"],
            referencedTableName: "families",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
         
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tasks");
  }
}
