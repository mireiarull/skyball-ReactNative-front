import resetGamesReducer from "./resetGamesReducer";

describe("Given a resetGamesReducer", () => {
  describe("When it recieves an initial state", () => {
    test("Then it should return a new state with the reset state", () => {
      const expectedGameState = {
        games: [],
        currentGame: {
          dateTime: "string",
          location: {
            type: "",
            coordinates: [],
          },
          beachName: "",
          level: 0,
          gender: "X",
          format: 0,
          spots: 0,
          description: "",
          players: [],
          image: "",
          backupImage: "",
          id: "",
          owner: "",
        },
      };

      const newGamesState = resetGamesReducer();

      expect(newGamesState).toStrictEqual(expectedGameState);
    });
  });
});
