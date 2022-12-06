/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { fireEvent, screen } from "@testing-library/react-native";
import { getRandomGameList } from "../../factories/gamesFactory";
import GameList from "./GameList";
import { renderWithProviders } from "../../test-utils/renderWithProviders";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockLoadOneGames = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => () => ({
  loadOneGame: mockLoadOneGames,
}));

jest.mock("react-native-maps", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const mockComponent = require("react-native/jest/mockComponent");
  return mockComponent("react-native-maps");
});

describe("Given a GamesList component", () => {
  const games = getRandomGameList(3);

  describe("When it is rendered with a list of 3 games", () => {
    test("Then it should show 3 games on the screen", () => {
      const gameCardTestId = "gameCard";

      renderWithProviders(<GameList games={games} />);

      const expectedCards = screen.queryAllByTestId(gameCardTestId);
      expect(expectedCards).toHaveLength(3);
    });
  });

  test("Then it should show a button to show the map", () => {
    const mapCloseButtonText = "Cerrar mapa";
    const mapOpenButtonText = "Ver mapa";

    renderWithProviders(<GameList games={games} />);

    const expectedOpenButton = screen.queryByText(mapOpenButtonText);
    fireEvent.press(expectedOpenButton);

    const expectedClosedButton = screen.queryByText(mapCloseButtonText);

    expect(expectedOpenButton).toBeDefined();
    expect(expectedClosedButton).toBeDefined();
  });

  describe("When the user clicks on the game marker", () => {
    test("Then it should call loadOneGame with the game id", () => {
      const mapOpenButtonText = "Ver mapa";

      renderWithProviders(<GameList games={games} />);

      const expectedOpenButton = screen.queryByText(mapOpenButtonText);
      fireEvent.press(expectedOpenButton);

      const marker = screen.getAllByTestId("marker");

      fireEvent.press(marker[0]);

      expect(mockLoadOneGames).toHaveBeenCalled();
    });
  });
});
