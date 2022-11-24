import { renderHook } from "@testing-library/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import makeWrapper from "../../mocks/makeWrapper";
import useToken from "./useToken";
import { loginUserMock } from "../../mocks/userMocks";

const { token } = loginUserMock;

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn().mockReturnValue("token12345"),
  removeItem: jest.fn(),
}));

describe("Given the hook useToken", () => {
  describe("When it's method checkToken is invoked and there is a token in AsyncStorage", () => {
    test("Then getItem should be called with 'token'", async () => {
      const {
        result: {
          current: { checkToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.getItem = jest.fn().mockReturnValue(token);

      await checkToken();

      expect(AsyncStorage.getItem).toHaveBeenCalledWith("token");
    });
  });

  describe("When it's method removeToken is invoked", () => {
    test("Then removeItem should be called with 'token'", async () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.removeItem = jest.fn().mockReturnValue(token);

      await removeToken();

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith("token");
    });
  });
});
