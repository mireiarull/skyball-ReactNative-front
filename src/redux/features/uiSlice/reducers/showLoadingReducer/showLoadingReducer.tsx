import { type UiState } from "../../types";

const showLoadingReducer = (previousUi: UiState) => ({
  ...previousUi,
  isLoading: true,
});

export default showLoadingReducer;
