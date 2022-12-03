import type { PayloadAction } from "@reduxjs/toolkit";
import { type GamesState, type GameStructure } from "../../types";

const loadMoreGamesReducer = (
  currentGamesState: GamesState,
  action: PayloadAction<GameStructure[]>
) => ({
  ...currentGamesState,
  games: [...currentGamesState.games, ...action.payload],
});

export default loadMoreGamesReducer;
