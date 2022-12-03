import { getRandomGameList } from "../../../../../factories/gamesFactory";
import { emptyCurrentGameState } from "../../../../../mocks/gamesMocks";
import { gamesReducer, loadMoreGamesActionCreator } from "../../gamesSlice";
import { type GamesState, type GameStructure } from "../../types";

describe("Given a loadMoreGamesReducer", () => {
  describe("When it recieves an initial state with a list of 2 games and a loadMoregames action with 3 games", () => {
    test("Then it should return a new state with the 5 games", () => {
      const initialGames = getRandomGameList(2);

      const currentState: GamesState = {
        games: initialGames,
        currentGame: emptyCurrentGameState,
      };

      const actionPayload: GameStructure[] = getRandomGameList(3);
      const expectedGameState: GamesState = {
        games: [...initialGames, ...actionPayload],
        currentGame: emptyCurrentGameState,
      };

      const newGamesState = gamesReducer(
        currentState,
        loadMoreGamesActionCreator(actionPayload)
      );

      expect(newGamesState).toStrictEqual(expectedGameState);
    });
  });
});
