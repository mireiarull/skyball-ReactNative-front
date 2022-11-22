import type { PayloadAction } from "@reduxjs/toolkit";
import { type UiState } from "../../../types";

const openModalReducer = (
  previousUi: UiState,
  action: PayloadAction<string>
) => ({
  ...previousUi,
  modal: action.payload,
});

export default openModalReducer;
