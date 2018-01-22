import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StockPrices {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  isAdmin: boolean;

  @Column()
  joindate: Date;
}
