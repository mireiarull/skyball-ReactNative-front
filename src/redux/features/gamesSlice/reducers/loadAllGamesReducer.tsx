import type { PayloadAction } from "@reduxjs/toolkit";
import { type GameStructure } from "../types";

const loadAllGames = (
  currentGamesState: GameStructure[],
  action: PayloadAction<GameStructure[]>
) => ({
  ...currentGamesState,
  games: action.payload,
});

export default loadAllGames;
