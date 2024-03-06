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
import { User } from "./User";
import { Tasks } from "./tasks";

@Entity("families")
export class Families {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  user_id!: number;

  @Column()
  family_name?: string;
  

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @OneToMany(() => Tasks , (task) => task.families)
  tasks?: Tasks[];

  @ManyToOne(() => User, (user) => user.families)
  @JoinColumn({ name: "user_id" })
  user!: User;

 
}

