import { createSlice } from "@reduxjs/toolkit";
import { type UiState } from "./types";

import closeModalReducer from "./reducers/closeModalReducer/closeModalReducer";
import openModalReducer from "./reducers/openModalReducer/openModalReducer";
import showLoadingReducer from "./reducers/showLoadingReducer/showLoadingReducer";
import hideLoadingReducer from "./reducers/hideLoadingReducer/hideLoadingReducer";

const initialState: UiState = {
  isLoading: false,
  isError: false,
  modalTitle: "",
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
    showLoadingReducer,
    hideLoadingReducer,
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModalReducer: openModalActionCreator,
  closeModalReducer: closeModalActionCreator,
  showLoadingReducer: showLoadingActionCreator,
  hideLoadingReducer: hideLoadingActionCreator,
} = uiSlice.actions;
