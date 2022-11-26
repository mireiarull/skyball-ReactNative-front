import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type GameStructure, type GamesState } from "./types";

const gamesInitialState: GamesState = {
  games: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState: gamesInitialState,
  reducers: {
    loadAllGames: (
      currentGamesState,
      action: PayloadAction<GameStructure[]>
    ) => ({
      ...currentGamesState,
      games: action.payload,
    }),
  },
});

export const gamesReducer = gamesSlice.reducer;
export const { loadAllGames: loadAllGamesActionCreator } = gamesSlice.actions;
