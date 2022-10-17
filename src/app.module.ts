import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Game } from './games/game';
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33060,
      username: 'homestead',
      password: 'secret',
      database: 'pronotime',
      entities: [Game],
      synchronize: false,
      //autoLoadEntities: true
    }),
    GamesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
