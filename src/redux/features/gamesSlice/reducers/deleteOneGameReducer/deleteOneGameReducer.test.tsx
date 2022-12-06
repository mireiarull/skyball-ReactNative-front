import { getRandomGameList } from "../../../../../factories/gamesFactory";
import { emptyCurrentGameState } from "../../../../../mocks/gamesMocks";
import { deleteOneGameActionCreator, gamesReducer } from "../../gamesSlice";
import { type GamesState } from "../../types";

describe("Given a deleteOneGamesReducer", () => {
  describe("When it recieves an initial state with a list of 3 games and and action one id", () => {
    test("Then it should return a new state with 2 games excluding the one matching the id", () => {
      const gamesList = getRandomGameList(3);

      const currentState: GamesState = {
        games: gamesList,
        currentGame: emptyCurrentGameState,
      };
      const actionPayload = gamesList[0].id;

      const expectedGameState: GamesState = {
        games: gamesList.filter((game) => game.id !== gamesList[0].id),
        currentGame: emptyCurrentGameState,
      };

      const newGamesState = gamesReducer(
        currentState,
        deleteOneGameActionCreator(actionPayload!)
      );

      expect(newGamesState).toStrictEqual(expectedGameState);
    });
  });
});
