import { createSlice } from "@reduxjs/toolkit";
import { emptyCurrentGameState } from "../../../mocks/gamesMocks";
import loadAllGamesReducer from "./reducers/loadAllGamesReducer/loadAllGamesReducer";
import { type GamesState } from "./types";

const gamesInitialState: GamesState = {
  games: [],
  currentGame: emptyCurrentGameState,
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
