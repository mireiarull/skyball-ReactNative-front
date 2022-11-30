import { createSlice } from "@reduxjs/toolkit";
import { emptyCurrentGameState } from "../../../mocks/gamesMocks";
import loadAllGamesReducer from "./reducers/loadAllGamesReducer/loadAllGamesReducer";
import loadOneGameReducer from "./reducers/loadOneGameReducer/loadOneGameReducer";
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
    loadOneGameReducer,
  },
});

export const gamesReducer = gamesSlice.reducer;
export const {
  loadAllGamesReducer: loadAllGamesActionCreator,
  loadOneGameReducer: loadOneGameActionCreator,
} = gamesSlice.actions;
