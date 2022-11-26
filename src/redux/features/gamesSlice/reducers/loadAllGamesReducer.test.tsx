import { getRandomGameList } from "../../../../factories/gamesFactory";
import { gamesReducer, loadAllGamesActionCreator } from "../gamesSlice";
import { type GamesState, type GameStructure } from "../types";

describe("Given a loadAllGamesReducer", () => {
  describe("When it recieves an initial state with an empty list and a load games action with a 3 games", () => {
    test("Then it should return a new state with the 3 games", () => {
      const currentState: GamesState = {
        games: [],
      };
      const actionPayload: GameStructure[] = getRandomGameList(3);
      const expectedGameState: GamesState = { games: actionPayload };

      const newGamesState = gamesReducer(
        currentState,
        loadAllGamesActionCreator(actionPayload)
      );

      expect(newGamesState).toStrictEqual(expectedGameState);
    });
  });
});
