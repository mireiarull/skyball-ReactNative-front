import { type UiState } from "../../../types";

const closeModalreducer = (previousUi: UiState) => ({
  ...previousUi,
  modal: "",
});

export default closeModalreducer;
