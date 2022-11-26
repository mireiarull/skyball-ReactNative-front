import type { PayloadAction } from "@reduxjs/toolkit";
import { type GamesState, type GameStructure } from "../types";

const loadAllGamesReducer = (
  currentGamesState: GamesState,
  action: PayloadAction<GameStructure[]>
) => ({
  ...currentGamesState,
  games: action.payload,
});

export default loadAllGamesReducer;
