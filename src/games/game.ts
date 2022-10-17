import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name : 'games'})
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // dateMatch: Date;

  @Column()
  team1: string;

  @Column()
  team2: string;
}