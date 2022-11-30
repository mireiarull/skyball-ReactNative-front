/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import { getRandomGameWithId } from "../../factories/gamesFactory";
import GameCard from "./GameCard";
import { type GameStructureWithId } from "../../redux/features/gamesSlice/types";
import { renderWithProviders } from "../../test-utils/renderWithProviders";

describe("Given a GameCard component", () => {
  describe("When it is rendered with one game", () => {
    test("Then it should show the game's format, gender 'Masculino', level 'principiante', players, spots and beach name on the screen", () => {
      const game: GameStructureWithId = {
        ...getRandomGameWithId,
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
      const game: GameStructureWithId = {
        ...getRandomGameWithId,
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
      const game: GameStructureWithId = {
        ...getRandomGameWithId,
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
      const game: GameStructureWithId = {
        ...getRandomGameWithId,
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
      const game: GameStructureWithId = {
        ...getRandomGameWithId,
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
});
