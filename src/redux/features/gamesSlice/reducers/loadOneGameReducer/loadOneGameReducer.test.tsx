import { getRandomGame } from "../../../../../factories/gamesFactory";
import { emptyGamesState } from "../../../../../mocks/gamesMocks";
import loadOneGameReducer from "./loadOneGameReducer";

const game = getRandomGame;

describe("Given loadOneGameReducer", () => {
  describe("When it recieves an initial state with the id of one game", () => {
    test("Then it should return a new state with the currentGame", () => {
      const currentGamesState = emptyGamesState;

      const expectedGamesState = {
        ...currentGamesState,
        currentGame: game,
      };

      const newGamesState = loadOneGameReducer(currentGamesState, {
        payload: game,
        type: "loadOneGame",
      });

      expect(newGamesState).toStrictEqual(expectedGamesState);
    });
  });
});
