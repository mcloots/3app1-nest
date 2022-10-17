import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name : 'games'})
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateMatch: Date;

  @Column()
  team1: string;

  @Column()
  team2: string;

  @Column()
  starthour: number;

  @Column()
  startminutes: number;

  @Column()
  score1: number;

  @Column()
  country1: string;

  @Column()
  country2: string;

  @Column()
  score2: number;

  @Column()
  assignWinner: boolean;

  @Column()
  created_at: Date;

  @Column()
  event_id: number;
}