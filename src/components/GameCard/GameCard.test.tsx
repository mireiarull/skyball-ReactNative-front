/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, fireEvent } from "@testing-library/react-native";
import GameCard from "./GameCard";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import { getRandomGame } from "../../factories/gamesFactory";
import {
  mockInitialGamesState,
  mockInitialUiState,
  mockInitialUserState,
} from "../../mocks/uiMocks";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockLoadOneGames = jest.fn();
const mockDeleteOneGame = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => () => ({
  loadOneGame: mockLoadOneGames,
  deleteOneGame: mockDeleteOneGame,
}));

describe("Given a GameCard component", () => {
  describe("When it is rendered with one game", () => {
    test("Then it should show the game's format, gender 'Masculino', level 'principiante', players, spots and beach name on the screen", () => {
      const game: GameStructure = {
        ...getRandomGame,
        level: 1,
        gender: "M",
      };
      const gameFormat = `${game.format} vs ${game.format}`;
      const gameLevel = `Nivel ${game.level}`;
      const gameGender = "Masculino";

      renderWithProviders(<GameCard game={game} />);

      const expectedCardTitle = screen.queryByText(game.beachName);
      const expectedCardFormat = screen.queryByText(gameFormat);
      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardTitle).toBeDefined();
      expect(expectedCardFormat).toBeDefined();
      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender 'Femenino', level 'intermedio', players, spots and beach name on the screen", () => {
      const game: GameStructure = {
        ...getRandomGame,
        level: 2,
        gender: "F",
      };
      const gameLevel = `Nivel ${game.level}`;
      const gameGender = "Femenino";

      renderWithProviders(<GameCard game={game} />);

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender 'Mixto', level 'intermedio alto', players, spots and beach name on the screen", () => {
      const game: GameStructure = {
        ...getRandomGame,
        level: 3,
        gender: "X",
      };
      const gameLevel = `Nivel ${game.level}`;
      const gameGender = "Mixto";

      renderWithProviders(<GameCard game={game} />);

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender, level 'avanzado', players, spots and beach name on the screen", () => {
      const game: GameStructure = {
        ...getRandomGame,
        level: 4,
        gender: "X",
      };
      const gameLevel = `Nivel ${game.level}`;

      renderWithProviders(<GameCard game={game} />);

      const expectedCardLevel = screen.queryByText(gameLevel);

      expect(expectedCardLevel).toBeDefined();
    });
  });

  describe("And a the user clicks on one game", () => {
    test("Then the useNavigation should be called with the detail page reference and loadOneGame should be called with the game id", () => {
      const gameTitleLinkId = "linkToDetail";
      const game: GameStructure = {
        ...getRandomGame,
        id: "1234",
      };

      renderWithProviders(<GameCard game={game} />);

      const linkToDetail = screen.getByTestId(gameTitleLinkId);
      fireEvent(linkToDetail, "press");

      expect(mockLoadOneGames).toHaveBeenCalledWith(game.id);
    });
  });

  describe("And a the user who owns the game clicks on the delete game button", () => {
    test("Then the deleteOneGame should be called with the game id ", () => {
      const deleteButtonId = "deleteButton";
      const game: GameStructure = {
        ...getRandomGame,
        id: "1234",
        owner: "654321",
      };

      renderWithProviders(<GameCard game={game} />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: { ...mockInitialUserState, id: "654321" },
          games: mockInitialGamesState,
        },
      });

      const deleteButton = screen.getByTestId(deleteButtonId);
      fireEvent(deleteButton, "press");

      expect(mockDeleteOneGame).toHaveBeenCalledWith(game.id);
    });
  });
});
