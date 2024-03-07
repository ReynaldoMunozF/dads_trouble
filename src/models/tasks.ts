import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";



@Entity("tasks")
export class Tasks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  users_id!: number;

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

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: "user_id" })
  user!: User;




}
