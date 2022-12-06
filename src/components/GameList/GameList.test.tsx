/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { fireEvent, screen } from "@testing-library/react-native";
import { getRandomGameList } from "../../factories/gamesFactory";
import GameList from "./GameList";
import { renderWithProviders } from "../../test-utils/renderWithProviders";

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
});
