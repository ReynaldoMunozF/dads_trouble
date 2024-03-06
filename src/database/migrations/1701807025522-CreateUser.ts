import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1701807025522 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      //
      await queryRunner.createTable(
         new Table({
            name: "users",
            columns: [
               {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
               },
              
               {
                  name: "first_name",
                  type: "varchar",
                  length: "255",
               },
               {
                  name: "last_name",
                  type: "varchar",
                  length: "255",
               },
               {
                  name: "email",
                  type: "varchar",
                  length: "255",
                  isUnique: true,
               },
               {
                  name: "birthday",
                  type: "date",
                  isNullable: true,
                 
               },
               {
                  name: "password",
                  type: "varchar",
                  length: "200",
               },
               {
                  name: "role",
                  type: "enum",
                  enum: ["dad", "children", "super_admin"],
                  default: '"dad"'
              },
               {
                  name: "active",
                  type: "Tinyint",
                  default: 1,
                  length: "1",
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
      await queryRunner.dropTable("users");
   }
}
