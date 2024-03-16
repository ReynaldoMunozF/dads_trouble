import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Families } from "./families";
import { Roles } from "./roles";
import { Tasks } from "./tasks";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  families_id!: number;

  @Column()
  roles_id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  email!: string;
  

  @Column()
  birthday?: Date;

  @Column({ select: false })
  password!: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @Column()
  active?: Number;

  @OneToMany(() => Tasks, (tasks) => tasks.user)
  tasks?: Tasks[];

  @ManyToOne(() => Families, (families) => families.user)
  @JoinColumn({ name: "families_id" })
  families?: Families;

  @ManyToOne(() => Roles, (roles) => roles.user)
  @JoinColumn({ name: "roles_id" })
  roles?: Roles;
}
