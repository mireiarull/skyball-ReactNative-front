import React from "react";
import { screen } from "@testing-library/react-native";
import { getRandomGameList } from "../../factories/gamesFactory";
import GameList from "./GameList";
import { renderWithProviders } from "../../test-utils/renderWithProviders";

describe("Given a GamesList component", () => {
  describe("When it is rendered with a list of 3 games", () => {
    test("Then it should show 3 games on the screen", () => {
      const games = getRandomGameList(3);
      const gameCardTestId = "gameCard";

      renderWithProviders(<GameList games={games} />);

      const expectedCards = screen.queryAllByTestId(gameCardTestId);
      expect(expectedCards).toHaveLength(3);
    });
  });
});
