/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import {
  emptyMocalMock as emptyModalMock,
  mockInitialGamesState,
  mockInitialUserState,
} from "../../mocks/uiMocks";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import UpdateScreen from "./UpdateScreen";

describe("Given an UpdateScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a title with the text 'Editar mi partido'", () => {
      const titleText = "Partidos";

      renderWithProviders(<UpdateScreen />, {
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
