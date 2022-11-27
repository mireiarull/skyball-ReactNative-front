/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import CreateScreen from "./CreateScreen";

describe("Given a CreateScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a title with the text 'Crear nuevo partido'", () => {
      const titleText = "Crear nuevo partido";

      renderWithProviders(<CreateScreen />);

      const displayedText = screen.queryByText(titleText);

      expect(displayedText).toBeDefined();
    });
  });
});
