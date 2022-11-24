import { type UiState } from "../../types";
import { openModalActionCreator, uiReducer } from "../../uiSlice";

describe("Given openModalReducer", () => {
  const mockUiState: UiState = {
    isError: false,
    modalText: "",
    modalTitle: "",
    showModal: false,
    buttonText: "",
  };

  describe("When it recieves an initial state and a payload isError true and the text 'There was an error'", () => {
    test("Then it should return a new state with the modal's isError true and modal text 'There was an error'", () => {
      const actionPayload = {
        isError: true,
        modalTitle: "Oops",
        modalText: "There was an error",
        buttonText: "Continue",
      };
      const initialUiState: UiState = {
        ...mockUiState,
      };
      const expectedUiState: UiState = {
        showModal: true,
        modalText: actionPayload.modalText,
        modalTitle: actionPayload.modalTitle,
        isError: actionPayload.isError,
        buttonText: actionPayload.buttonText,
      };

      const newUiState = uiReducer(
        initialUiState,
        openModalActionCreator(actionPayload)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
