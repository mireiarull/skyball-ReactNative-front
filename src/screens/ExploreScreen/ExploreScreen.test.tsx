/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";

import ExploreScreen from "./ExploreScreen";
import {
  emptyMocalMock as emptyModalMock,
  mockInitialGamesState,
  mockInitialUserState,
} from "../../mocks/uiMocks";
import { renderWithProviders } from "../../test-utils/renderWithProviders";

describe("Given an ExploreScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a title with the text 'Partidos'", () => {
      const titleText = "Partidos";

      renderWithProviders(<ExploreScreen />, {
        preloadedState: {
          ui: emptyModalMock,
          user: mockInitialUserState,
          games: mockInitialGamesState,
        },
      });

      const displayedText = screen.queryByText(titleText);

      expect(displayedText).toBeDefined();
    });
  });
});
