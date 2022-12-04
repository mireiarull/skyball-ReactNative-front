import type { PayloadAction } from "@reduxjs/toolkit";
import { type UiState } from "../../types";

const addFilterReducer = (
  previousUi: UiState,
  action: PayloadAction<string>
): UiState => ({
  ...previousUi,
  filter: action.payload,
  pagination: { ...previousUi.pagination, currentPage: 0 },
});

export default addFilterReducer;
