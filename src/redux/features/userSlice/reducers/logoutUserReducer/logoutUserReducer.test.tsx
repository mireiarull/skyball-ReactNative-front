import { loginUserMock } from "../../../../../mocks/userMocks";
import { type UserState } from "../../types";
import { logoutUserActionCreator, userReducer } from "../../userSlice";

describe("Given a logoutUserReducer", () => {
  describe("When it recieves an initial state with a logged user with email 'mireia@gmail.com'", () => {
    test("Then it should return a new state with an empty user", () => {
      const currentUserState = loginUserMock;

      const expectedUserState: UserState = {
        id: "",
        email: "",
        token: "",
        isLogged: false,
      };

      const newUserState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
