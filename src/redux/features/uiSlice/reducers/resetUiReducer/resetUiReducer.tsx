import { type UiState } from "../../types";

const resetUiReducer = (): UiState => ({
  isLoading: false,
  showModal: false,
  isError: false,
  modalTitle: "",
  modalText: "",
  buttonText: "",
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
  filter: "",
});

export default resetUiReducer;
