import { loginUserMock } from "../../../../../mocks/userMocks";
import { type UserState } from "../../types";
import { loginUserActionCreator, userReducer } from "../../userSlice";

describe("Given a loginUserReducer", () => {
  describe("When it recieves an initial state with a user with username: 'luis123'", () => {
    test("Then it should return a new state with the user and its the property isLogged changed to true", () => {
      const currentUserState = loginUserMock;

      const expectedUserState: UserState = { ...loginUserMock, isLogged: true };

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(loginUserMock)
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
