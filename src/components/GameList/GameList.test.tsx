import React from "react";
import { render, screen } from "@testing-library/react-native";
import { getRandomGameList } from "../../factories/gamesFactory";
import GameList from "./GameList";

describe("Given a GamesList component", () => {
  describe("When it is rendered with a list of 3 games", () => {
    test("Then it should show 3 games on the screen", () => {
      const games = getRandomGameList(3);
      const gameCardTestId = "gameCard";

      render(<GameList games={games} />);

      const expectedCards = screen.queryAllByTestId(gameCardTestId);
      expect(expectedCards).toHaveLength(3);
    });
  });
});
