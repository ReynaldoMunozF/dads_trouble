import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity("usersDetails")
export class UserDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  users_id!: number;

  @Column()
  height?: string;

  @Column()
  weight?: string;

  @Column()
  shirt_size?: string;

  @Column()
  pant_size?: string;

  @Column()
  shoe_size?: string;

  @Column()
  allergies?: string;

  @ManyToOne(() => User, (user) => user.userDetails)
  @JoinColumn({ name: "users_id" })
  user!: User;
}
