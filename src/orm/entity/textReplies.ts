import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TextReplies {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  watchText: string;

  @Column({ type: "varchar" })
  replyText: string;
}
