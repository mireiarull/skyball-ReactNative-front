import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { type store } from "../redux/store";

export const mockInitialUiState = {
  showModal: true,
  isError: false,
  modalText: "Success",
  buttonText: "Continue",
};

export const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState: {
    ui: mockInitialUiState,
  },
});
