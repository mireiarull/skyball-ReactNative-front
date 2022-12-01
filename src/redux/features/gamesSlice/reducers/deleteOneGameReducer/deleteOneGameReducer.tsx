import type { PayloadAction } from "@reduxjs/toolkit";
import { type GamesState } from "../../types";

const deleteOneGameReducer = (
  previousGames: GamesState,
  action: PayloadAction<string>
) => ({
  ...previousGames,
  games: previousGames.games.filter((game) => game.id !== action.payload),
});

export default deleteOneGameReducer;
