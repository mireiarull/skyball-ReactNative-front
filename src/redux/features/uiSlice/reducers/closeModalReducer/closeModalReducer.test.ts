import { type UiState } from "../../types";
import { closeModalActionCreator, uiReducer } from "../../uiSlice";

describe("Given closeModalReducer", () => {
  describe("When it recieves an initial state with showModal true and a hideMocad action creator'", () => {
    test("Then it should return a new state with with showModal false", () => {
      const mockUiState: UiState = {
        isError: false,
        modalText: "",
        showModal: true,
        buttonText: "",
        isLoading: false,
        modalTitle: "",
      };

      const expectedUiState: UiState = {
        ...mockUiState,
        showModal: false,
      };

      const newUiState = uiReducer(mockUiState, closeModalActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
