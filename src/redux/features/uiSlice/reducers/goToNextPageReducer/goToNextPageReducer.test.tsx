import { type Pagination, type UiState } from "../../types";
import { goToNextPageReducerActionCreator, uiReducer } from "../../uiSlice";

describe("Given a goToNextPages reducer", () => {
  describe("When it receives an action to go to next page", () => {
    test("Then should return the new state with the current page updated to 2", () => {
      const expectedPagination: Pagination = {
        currentPage: 2,
        totalPages: 2,
      };

      const initialState: Partial<UiState> = {
        pagination: {
          currentPage: 1,
          totalPages: 2,
        },
      };

      const action = goToNextPageReducerActionCreator();

      const newState = uiReducer(initialState as UiState, action);

      expect(newState).toHaveProperty("pagination", expectedPagination);
    });
  });
});
