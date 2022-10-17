import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  findAll(): Promise<Game[]> {
    return this.gamesRepository.find();
  }

  findOne(id: number): Promise<Game> {
    return this.gamesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.gamesRepository.delete(id);
  }

  async create(game: CreateGameDto) {
     return await this.gamesRepository.insert(game);
  }
}