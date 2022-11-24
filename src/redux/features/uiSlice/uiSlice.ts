import { createSlice } from "@reduxjs/toolkit";
import { type UiState } from "./types";

import closeModalReducer from "./reducers/closeModalReducer/closeModalReducer";
import openModalReducer from "./reducers/openModalReducer/openModalReducer";

const initialState: UiState = {
  isError: false,
  modalText: "",
  showModal: false,
  buttonText: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModalReducer,
    closeModalReducer,
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModalReducer: openModalActionCreator,
  closeModalReducer: closeModalActionCreator,
} = uiSlice.actions;
