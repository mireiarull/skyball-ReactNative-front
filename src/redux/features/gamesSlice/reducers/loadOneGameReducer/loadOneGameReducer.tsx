import type { PayloadAction } from "@reduxjs/toolkit";
import { type GamesState, type GameStructure } from "../../types";

const loadOneGameReducer = (
  previousGames: GamesState,
  action: PayloadAction<GameStructure>
) => ({
  ...previousGames,
  currentGame: action.payload,
});

export default loadOneGameReducer;
