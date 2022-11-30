import { getRandomGame, getRandomGameList } from "../factories/gamesFactory";
import {
  type GameStructure,
  type GamesState,
  type GameStructureWithId,
} from "../redux/features/gamesSlice/types";

export const mockLoadGamesResponse = {
  games: getRandomGameList(3),
};

export const emptyGamesState: GamesState = {
  currentGame: getRandomGame,
  games: getRandomGameList(3),
};

export const emptyCurrentGameState: GameStructure = {
  beachName: "",
  dateTime: "",
  description: "",
  format: 0,
  gender: "X",
  image: "",
  level: 0,
  location: {
    coordinates: [0, 0],
    type: "Point",
  },
  spots: 0,
  players: [
    {
      role: "owner",
      id: "",
      material: {
        net: false,
        ball: false,
        rods: false,
      },
    },
  ],
};

export const mockloadOneGameResponse: GameStructureWithId = {
  ...getRandomGame,
  id: "123456",
};
