import { getRandomGame, getRandomGameList } from "../factories/gamesFactory";
import {
  type GameStructure,
  type GamesState,
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

export const mockloadOneGameResponse: GameStructure = {
  ...getRandomGame,
  id: "123456",
  owner: "",
};

export const mockInitialGamesStateFemaleLevel1: GamesState = {
  games: getRandomGameList(3),
  currentGame: { ...getRandomGame, gender: "F", level: 1 },
};

export const mockInitialGamesStateMixtLevel2: GamesState = {
  games: getRandomGameList(3),
  currentGame: { ...getRandomGame, gender: "X", level: 2 },
};

export const mockInitialGamesStateMaleLevel3: GamesState = {
  games: getRandomGameList(3),
  currentGame: { ...getRandomGame, gender: "M", level: 3 },
};
export const mockInitialGamesStateLevel4: GamesState = {
  games: getRandomGameList(3),
  currentGame: { ...getRandomGame, level: 4 },
};
