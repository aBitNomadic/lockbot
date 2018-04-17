import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  username: string;

  @Column({ type: "varchar" })
  isAdmin: boolean;

  @Column({ type: "varchar" })
  joindate: Date;
}
