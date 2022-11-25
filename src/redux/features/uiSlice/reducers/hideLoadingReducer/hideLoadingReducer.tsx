import { type UiState } from "../../types";

const hideLoadingReducer = (previousUi: UiState) => ({
  ...previousUi,
  isLoading: false,
});

export default hideLoadingReducer;
