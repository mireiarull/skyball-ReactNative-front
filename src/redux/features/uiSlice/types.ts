export interface UiState {
  isLoading: boolean;
  showModal: boolean;
  isError: boolean;
  modalTitle: string;
  modalText: string;
  buttonText: string;
}

export interface ShowModalActionPayload {
  isError: boolean;
  modalTitle: string;
  modalText: string;
  buttonText: string;
}
