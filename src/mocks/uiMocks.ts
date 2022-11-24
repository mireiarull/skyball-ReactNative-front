import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { type UserState } from "../redux/features/userSlice/types";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { type store } from "../redux/store";

export const mockInitialUiState = {
  showModal: true,
  isError: false,
  modalText: "Success",
  buttonText: "Continue",
};

export const mockInitialUserState: UserState = {
  id: "",
  email: "",
  isLogged: false,
  token: "",
};

export const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
  preloadedState: {
    ui: mockInitialUiState,
    user: mockInitialUserState,
  },
});
