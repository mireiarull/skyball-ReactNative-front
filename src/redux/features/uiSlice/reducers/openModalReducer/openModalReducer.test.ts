import { openModalActionCreator, uiReducer } from "../../uiSlice";

describe("Given openModalReducer", () => {
  describe("When it recieves an initial state and a payload with 'Register successful'", () => {
    test("Then it should return a new state with the modal's value 'Register successful' ", () => {
      const currentUiState = { modal: "" };
      const modalText = "Register successful";

      const expectedUiState = { ...currentUiState, modal: modalText };

      const newUiState = uiReducer(
        currentUiState,
        openModalActionCreator(modalText)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
