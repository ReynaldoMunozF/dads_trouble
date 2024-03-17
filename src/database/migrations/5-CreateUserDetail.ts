import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserDetail1709715865857 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        //
        await queryRunner.createTable(
           new Table({
              name: "usersDetails",
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
                    name: "height",
                    type: "varchar",
                    length: "255",
                    isNullable:true,
                    default: '"Pendiente"',
                 },
                 {
                    name: "weight",
                    type: "varchar",
                    length: "255",
                    isNullable:true,
                    default: '"Pendiente"'
                 },
                 {
                    name: "shirt_size",
                    type: "varchar",
                    length: "255",
                    isNullable:true,
                    default: '"Pendiente"'
                 },
                 {
                    name: "pant_size",
                    type: "varchar",
                    length: "255",
                    isNullable:true,
                    default: '"Pendiente"'
                 },
                 {
                    name: "shoe_size",
                    type: "varchar",
                    length: "255",
                    isNullable:true,
                    default: '"Pendiente"'
                 },
                 {
                    name: "allergies",
                    type: "varchar",
                    length: "255",
                    isNullable:true,
                    default: '"Pendiente"'
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
  
              foreignKeys: [
              
                {
                    columnNames: ["users_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
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
  
