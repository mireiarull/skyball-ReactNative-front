import { type UiState } from "../../types";
import { hideLoadingActionCreator, uiReducer } from "../../uiSlice";

describe("Given a hideLoadingReducer", () => {
  describe("When it recieves an initial state with isLoading true and a hideLoading action creator'", () => {
    test("Then it should return a new state with with isLoading false", () => {
      const mockUiState: UiState = {
        buttonText: "",
        modalTitle: "",
        isError: false,
        modalText: "",
        showModal: true,
        isLoading: true,
      };

      const expectedUiState: UiState = {
        ...mockUiState,
        isLoading: false,
      };

      const newUiState = uiReducer(mockUiState, hideLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
