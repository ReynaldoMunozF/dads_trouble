import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { Tasks } from "./tasks";
import { User } from "./User";

@Entity("families")
export class Families {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  family_name?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @OneToMany(() => User, (user) => user.families)
  user?: User[];
 
  @OneToMany(() => Tasks, (tasks) => tasks.families)
  tasks ?: Tasks[];
}
