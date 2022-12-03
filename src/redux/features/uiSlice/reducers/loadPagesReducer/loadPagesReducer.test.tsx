import { type Pagination, type UiState } from "../../types";
import { loadPagesReducerActionCreator, uiReducer } from "../../uiSlice";

describe("Given loadPages reducer", () => {
  describe("When it receives an action to load pages", () => {
    test("Then it should return the new state with pagination numbers", () => {
      const expectedPagination: Pagination = {
        currentPage: 1,
        totalPages: 2,
      };

      const initialState: Partial<UiState> = {
        pagination: {
          currentPage: 0,
          totalPages: 0,
        },
      };

      const action = loadPagesReducerActionCreator(expectedPagination);

      const newState = uiReducer(initialState as UiState, action);

      expect(newState).toHaveProperty("pagination", expectedPagination);
    });
  });
});
