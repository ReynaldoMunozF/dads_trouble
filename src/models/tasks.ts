import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Families } from "./families";



@Entity("tasks")
export class Tasks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  families_id!: number;

  @Column()
  name_task!: string

  @Column()
  task_date!: Date;
  
  @Column()
  hour!: string
 
  @Column()
  status?: string

  @Column()
  active?: Number;

  @ManyToOne(() => Families, (families) => families.tasks)
  @JoinColumn({ name: "families_id" })
  families!: Families;




}
