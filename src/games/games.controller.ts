import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) { }

    @Get()
    findAll() {
        return this.gamesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.gamesService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.gamesService.remove(id);
    }

    @Post()
    async create(@Body() game: CreateGameDto) {
       return await this.gamesService.create(game);
    }

}
