import type { PayloadAction } from "@reduxjs/toolkit";
import { type ShowModalActionPayload, type UiState } from "../../types";

const openModalReducer = (
  previousUi: UiState,
  action: PayloadAction<ShowModalActionPayload>
) => ({
  ...previousUi,
  showModal: true,
  isError: action.payload.isError,
  modalText: action.payload.modalText,
});

export default openModalReducer;
