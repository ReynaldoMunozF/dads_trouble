import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";
import { Families } from "./families";



@Entity("tasks")
export class Tasks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  users_id!: number;

  @Column()
  families_id!: number;

  @Column()
  name_task!: string

  @Column()
  date!: Date;
  
  @Column()
  hour!: string
 
  @Column()
  status?: string

  @Column()
  active?: Number;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: "users_id" })
  user!: User;

  @ManyToOne(() => Families, (families) => families.tasks)
  @JoinColumn({ name: "families_id" })
  families!: Families;




}
