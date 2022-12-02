/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { fireEvent, screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import GameDetail from "./GameDetail";
import { mockInitialUiState, mockInitialUserState } from "../../mocks/uiMocks";
import {
  mockInitialGamesStateFemaleLevel1,
  mockInitialGamesStateLevel4,
  mockInitialGamesStateMaleLevel3,
  mockInitialGamesStateMixtLevel2,
} from "../../mocks/gamesMocks";
import RoutesEnum from "../../navigation/routes";

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
describe("Given a DetailGame component", () => {
  describe("When it is rendered with one game", () => {
    test("Then it should show the game's format, gender 'Masculino', level 'intermedio alto', players, spots and beach name on the screen", () => {
      const gameLevel = "intermedio alto";
      const gameGender = "Masculino";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesStateFemaleLevel1,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender 'Femenino', level 'principiante' on the screen", () => {
      const gameLevel = "principiante";
      const gameGender = "Femenino";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesStateMaleLevel3,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender 'Mixto', level 'intermedio' on the screen", () => {
      const gameLevel = "intermedio";
      const gameGender = "Mixto";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesStateMixtLevel2,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format with level 'avanzado' on the screen", () => {
      const gameLevel = "avanzado";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesStateLevel4,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);

      expect(expectedCardLevel).toBeDefined();
    });
  });

  describe("And the game's owner number is '5'and the user id is '5'", () => {
    test("Then it should show a button with the text 'Editar mi partido'", () => {
      const buttonText = "Editar mi partido";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: { ...mockInitialUserState, id: "5" },
          games: mockInitialGamesStateFemaleLevel1,
        },
      });

      const editButton = screen.queryByText(buttonText);
      fireEvent(editButton, "press");

      expect(editButton).toBeDefined();
      expect(mockedNavigate).toHaveBeenCalledWith(RoutesEnum.update);
    });
  });

  describe("And the game's owner number is '5'and the user id is '1'", () => {
    test("Then it should show a button with the text 'Editar mi partido' the navigates to the edit form", () => {
      const buttonText = "Participar!";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: { ...mockInitialUserState, id: "1" },
          games: mockInitialGamesStateFemaleLevel1,
        },
      });

      const editButton = screen.queryByText(buttonText);

      expect(editButton).toBeDefined();
    });
  });
});
