/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { getRandomGame } from "../../factories/gamesFactory";
import GameCard from "./GameCard";
import { type GameStructure } from "../../redux/features/gamesSlice/types";

describe("Given a GameCard component", () => {
  describe("When it is rendered with one game", () => {
    test("Then it should show the game's format, gender 'Masculino', level 'principiante', players, spots and beach name on the screen", () => {
      const game: GameStructure = { ...getRandomGame, level: 1, gender: "M" };
      const gameFormat = `${game.format} vs ${game.format}`;
      const gameLevel = `Nivel ${game.level}`;
      const gameGender = "Masculino";

      render(<GameCard game={game} />);

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
      const game: GameStructure = { ...getRandomGame, level: 2, gender: "F" };
      const gameLevel = `Nivel ${game.level}`;
      const gameGender = "Femenino";

      render(<GameCard game={game} />);

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender 'Mixto', level 'intermedio alto', players, spots and beach name on the screen", () => {
      const game: GameStructure = { ...getRandomGame, level: 3, gender: "X" };
      const gameLevel = `Nivel ${game.level}`;
      const gameGender = "Mixto";

      render(<GameCard game={game} />);

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender, level 'avanzado', players, spots and beach name on the screen", () => {
      const game: GameStructure = { ...getRandomGame, level: 4, gender: "X" };
      const gameLevel = `Nivel ${game.level}`;

      render(<GameCard game={game} />);

      const expectedCardLevel = screen.queryByText(gameLevel);

      expect(expectedCardLevel).toBeDefined();
    });
  });
});
