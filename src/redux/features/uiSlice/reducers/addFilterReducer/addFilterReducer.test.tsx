import { mockInitialUiState } from "../../../../../mocks/uiMocks";
import { type UiState } from "../../types";
import { addFilterActionCreator, uiReducer } from "../../uiSlice";

describe("Given an addFilterReducer", () => {
  describe("When it recieves an initial state and a payload '2022-12-04'", () => {
    test("Then it should return a new state with the filter property with '2022-12-04' and the current page to zero", () => {
      const actionPayload = "2022-12-04";
      const initialUiState: UiState = {
        ...mockInitialUiState,
      };

      const expectedUiState: UiState = {
        ...mockInitialUiState,
        filter: "2022-12-04",
        pagination: { ...mockInitialUiState.pagination, currentPage: 0 },
      };

      const newUiState = uiReducer(
        initialUiState,
        addFilterActionCreator(actionPayload)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
