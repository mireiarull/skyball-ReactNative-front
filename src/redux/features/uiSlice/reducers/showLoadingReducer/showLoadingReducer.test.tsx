import { type UiState } from "../../types";
import { showLoadingActionCreator, uiReducer } from "../../uiSlice";

describe("Given a showLoadingReducer", () => {
  describe("When it recieves an initial state with isLoading false and a showLoading action creator'", () => {
    test("Then it should return a new state with with isLoading true", () => {
      const mockUiState: UiState = {
        buttonText: "",
        modalTitle: "",
        isError: false,
        modalText: "",
        showModal: true,
        isLoading: false,
      };

      const expectedUiState: UiState = {
        ...mockUiState,
        isLoading: true,
      };

      const newUiState = uiReducer(mockUiState, showLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
