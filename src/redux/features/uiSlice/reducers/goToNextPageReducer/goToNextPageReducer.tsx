import { type UiState } from "../../types";

const goToNextPageReducer = (previousUi: UiState) => ({
  ...previousUi,
  pagination: {
    ...previousUi.pagination,
    currentPage: previousUi.pagination.currentPage + 1,
  },
});

export default goToNextPageReducer;
