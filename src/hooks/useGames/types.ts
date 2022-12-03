import { type GameStructure } from "../../redux/features/gamesSlice/types";

export interface LoadGamesResponse {
  games: {
    isPreviousPage: boolean;
    isNextPage: boolean;
    totalPages: number;
    games: GameStructure[];
  };
}
