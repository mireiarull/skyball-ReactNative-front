export interface UiState {
  isLoading: boolean;
  showModal: boolean;
  isError: boolean;
  modalTitle: string;
  modalText: string;
  buttonText: string;
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}

export interface ShowModalActionPayload {
  isError: boolean;
  modalTitle: string;
  modalText: string;
  buttonText: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
}
