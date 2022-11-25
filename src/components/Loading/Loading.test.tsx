/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import Loading from "./Loading";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import { mockInitialUiState, mockInitialUserState } from "../../mocks/uiMocks";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the loading gif", async () => {
      const loadingId = "loading";

      renderWithProviders(<Loading />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
        },
      });

      const loading = screen.getByTestId(loadingId);

      expect(loading).toBeDefined();
    });
  });
});
