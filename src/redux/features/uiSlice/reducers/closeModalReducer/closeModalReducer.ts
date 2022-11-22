import { type UiState } from "../../types";

const closeModalreducer = (previousUi: UiState) => ({
  ...previousUi,
  showModal: false,
});

export default closeModalreducer;
