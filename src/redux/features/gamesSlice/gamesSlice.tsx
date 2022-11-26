import { createSlice } from "@reduxjs/toolkit";
import loadAllGamesReducer from "./reducers/loadAllGamesReducer";
import { type GamesState } from "./types";

const gamesInitialState: GamesState = {
  games: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState: gamesInitialState,
  reducers: {
    loadAllGamesReducer,
  },
});

export const gamesReducer = gamesSlice.reducer;
export const { loadAllGamesReducer: loadAllGamesActionCreator } =
  gamesSlice.actions;
