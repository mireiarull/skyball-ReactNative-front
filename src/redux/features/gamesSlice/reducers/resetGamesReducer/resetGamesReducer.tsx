import { type GamesState } from "../../types";

const resetGamesReducer = (): GamesState => ({
  games: [],
  currentGame: {
    dateTime: "string",
    location: {
      type: "",
      coordinates: [],
    },
    beachName: "",
    level: 0,
    gender: "X",
    format: 0,
    spots: 0,
    description: "",
    players: [],
    image: "",
    backupImage: "",
    id: "",
    owner: "",
  },
});

export default resetGamesReducer;
