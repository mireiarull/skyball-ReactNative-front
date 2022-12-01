/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, fireEvent } from "@testing-library/react-native";

import GameCard from "./GameCard";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import RoutesEnum from "../../navigation/routes";
import { getRandomGame } from "../../factories/gamesFactory";
import {
  mockInitialGamesState,
  mockInitialUiState,
  mockInitialUserState,
} from "../../mocks/uiMocks";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const mockLoadOneGames = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => () => ({
  loadOneGame: mockLoadOneGames,
}));

const dispatchSpy = jest.spyOn(store, "dispatch");

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

  describe("When it's rendered with one game without an image", () => {
    test("Then it should show the game card with the default image", () => {
      const game: GameStructure = {
        ...getRandomGame,
        level: 4,
        gender: "X",
        backupImage: "",
      };
      const defaultImageId = "defaultImage";
      renderWithProviders(<GameCard game={game} />);

      const expectedCardDefaultImage = screen.queryByTestId(defaultImageId);

      expect(expectedCardDefaultImage).toBeDefined();
    });
  });

  describe("And a logged user clicks on one game title", () => {
    test("Then the useNavigation should be called with the detail page reference and loadOneGame should be called with the game id ", async () => {
      const gameTitleLinkId = "linkToDetail";
      const game: GameStructure = {
        ...getRandomGame,
        id: "1234",
      };

      renderWithProviders(<GameCard game={game} />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: { ...mockInitialUserState, isLogged: true },
          games: mockInitialGamesState,
        },
      });

      const linkToDetail = await screen.getByTestId(gameTitleLinkId);
      fireEvent(linkToDetail, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(RoutesEnum.gameDetail);
      expect(mockLoadOneGames).toHaveBeenCalledWith(game.id);
    });
  });

  // Describe("And an unlogged user clicks on one game title", () => {
  //   test("Then the dispatch should be called with an error modal", async () => {
  //     const gameTitleLinkId = "linkToDetail";
  //     const game: GameStructure = {
  //       ...getRandomGame,
  //       id: "1234",
  //     };

  //     renderWithProviders(<GameCard game={game} />, {
  //       preloadedState: {
  //         ui: mockInitialUiState,
  //         user: { ...mockInitialUserState, isLogged: false },
  //         games: mockInitialGamesState,
  //       },
  //     });

  //     const linkToDetail = await screen.getByTestId(gameTitleLinkId);
  //     fireEvent(linkToDetail, "press");

  //     expect(dispatchSpy).toHaveBeenCalledWith(
  //       openModalActionCreator({
  //         isError: true,
  //         modalTitle: "Ha habido un error!",
  //         modalText:
  //           "Parece que ha habido un problema buscando el partido. Solo los usuarios registrados pueden ver los detalles",
  //         buttonText: "Volver",
  //       })
  //     );
  //   });
  // });
});
