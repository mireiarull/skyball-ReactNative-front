import resetUiReducer from "./resetUiReducer";

describe("Given a resetUiReducer", () => {
  describe("When it recieves an initial state", () => {
    test("Then it should return a new state with the reset state", () => {
      const expectedUiState = {
        isLoading: false,
        showModal: false,
        isError: false,
        modalTitle: "",
        modalText: "",
        buttonText: "",
        pagination: {
          currentPage: 0,
          totalPages: 0,
        },
        filter: "",
      };

      const newUiState = resetUiReducer();

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
