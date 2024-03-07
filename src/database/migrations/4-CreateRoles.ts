import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRoles1709715865817 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "roles",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

         
          {
            name: "name",
            type: "enum",
            enum: ["parents", "children"],
            default: '"parents"',
            
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