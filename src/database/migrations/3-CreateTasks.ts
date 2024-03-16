import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasks1709715865847 implements MigrationInterface {
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
            name: "users_id",
            type: "int",
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
            name: "date",
            type: "date",
          },
          {
            name: "hour",
            type: "varchar",
            length: "255",
            isNullable:true,
          },
          {
            name: "url",
            type: "varchar",
            length: "255",
            isNullable:true,
          },

          {
            name: "type",
            type: "enum",
            enum: ["task", "shopping"],
            default: '"task"',
          },

          {
            name: "status",
            type: "enum",
            enum: ["active", "inactive"],
            default: '"active"',
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
            columnNames: ["users_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
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
