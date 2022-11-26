import { getRandomGameList } from "../factories/gamesFactory";

export const mockLoadGamesResponse = {
  games: getRandomGameList(3),
};
