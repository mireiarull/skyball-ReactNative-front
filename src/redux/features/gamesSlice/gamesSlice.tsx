import { createSlice } from "@reduxjs/toolkit";
import { emptyCurrentGameState } from "../../../mocks/gamesMocks";
import deleteOneGameReducer from "./reducers/deleteOneGameReducer/deleteOneGameReducer";
import loadAllGamesReducer from "./reducers/loadAllGamesReducer/loadAllGamesReducer";
import loadMoreGamesReducer from "./reducers/loadMoreGamesReducer/loadMoreGamesReducer";
import loadOneGameReducer from "./reducers/loadOneGameReducer/loadOneGameReducer";
import resetGamesReducer from "./reducers/resetGamesReducer/resetGamesReducer";
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
    loadMoreGamesReducer,
    resetGamesReducer,
  },
});

export const gamesReducer = gamesSlice.reducer;
export const {
  loadAllGamesReducer: loadAllGamesActionCreator,
  loadOneGameReducer: loadOneGameActionCreator,
  deleteOneGameReducer: deleteOneGameActionCreator,
  loadMoreGamesReducer: loadMoreGamesActionCreator,
  resetGamesReducer: resetGamesActionCreator,
} = gamesSlice.actions;
