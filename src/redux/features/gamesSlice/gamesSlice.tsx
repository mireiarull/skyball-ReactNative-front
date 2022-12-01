import { createSlice } from "@reduxjs/toolkit";
import { emptyCurrentGameState } from "../../../mocks/gamesMocks";
import deleteOneGameReducer from "./reducers/deleteOneGameReducer/deleteOneGameReducer";
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
    deleteOneGameReducer,
  },
});

export const gamesReducer = gamesSlice.reducer;
export const {
  loadAllGamesReducer: loadAllGamesActionCreator,
  loadOneGameReducer: loadOneGameActionCreator,
  deleteOneGameReducer: deleteOneGameActionCreator,
} = gamesSlice.actions;
