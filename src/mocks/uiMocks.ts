import { configureStore } from "@reduxjs/toolkit";
import { getRandomGameList } from "../factories/gamesFactory";
import { gamesReducer } from "../redux/features/gamesSlice/gamesSlice";
import { type GamesState } from "../redux/features/gamesSlice/types";
import { type UiState } from "../redux/features/uiSlice/types";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { type UserState } from "../redux/features/userSlice/types";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { type store } from "../redux/store";

export const mockInitialUiState: UiState = {
  showModal: true,
  isError: false,
  modalText: "Success",
  buttonText: "Continue",
  isLoading: true,
  modalTitle: "",
};

export const emptyMocalMock: UiState = {
  showModal: false,
  isError: false,
  modalText: "",
  buttonText: "",
  isLoading: false,
  modalTitle: "",
};

export const mockInitialUserState: UserState = {
  id: "",
  email: "",
  isLogged: false,
  token: "",
};

export const mockInitialGamesState: GamesState = {
  games: getRandomGameList(3),
};

export const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    games: gamesReducer,
  },
  preloadedState: {
    ui: mockInitialUiState,
    user: mockInitialUserState,
    games: mockInitialGamesState,
  },
});
