import { createSlice } from "@reduxjs/toolkit";
import { type UiState } from "./types";

import closeModalReducer from "./reducers/closeModalReducer/closeModalReducer";
import openModalReducer from "./reducers/openModalReducer/openModalReducer";
import showLoadingReducer from "./reducers/showLoadingReducer/showLoadingReducer";
import hideLoadingReducer from "./reducers/hideLoadingReducer/hideLoadingReducer";
import loadPagesReducer from "./reducers/loadPagesReducer/loadPagesReducer";
import goToNextPageReducer from "./reducers/goToNextPageReducer/goToNextPageReducer";

const initialState: UiState = {
  isLoading: false,
  isError: false,
  modalTitle: "",
  modalText: "",
  showModal: false,
  buttonText: "",
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModalReducer,
    closeModalReducer,
    showLoadingReducer,
    hideLoadingReducer,
    loadPagesReducer,
    goToNextPageReducer,
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModalReducer: openModalActionCreator,
  closeModalReducer: closeModalActionCreator,
  showLoadingReducer: showLoadingActionCreator,
  hideLoadingReducer: hideLoadingActionCreator,
  loadPagesReducer: loadPagesReducerActionCreator,
  goToNextPageReducer: goToNextPageReducerActionCreator,
} = uiSlice.actions;
