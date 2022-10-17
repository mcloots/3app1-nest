export class CreateGameDto {
    dateMatch: Date;
    starthour: number;
    startminutes: number;
    team1: string;
    country1: string;
    team1Wins: boolean = false;
    score1: number = null;
    team2: string;
    country2: string;
    team2Wins: boolean = false;
    score2: number = null;
    assignWinner: boolean = false;
    created_at: Date = new Date();
    event_id: number = 1;
}