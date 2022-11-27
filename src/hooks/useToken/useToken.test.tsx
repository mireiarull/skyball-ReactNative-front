/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { renderHook } from "@testing-library/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import makeWrapper from "../../mocks/makeWrapper";
import useToken from "./useToken";
import { loginUserMock } from "../../mocks/userMocks";
import { type User } from "../../redux/features/userSlice/types";
import { type JwtCustomPayload } from "../../types/types";
import { store } from "../../redux/store";

const { token } = loginUserMock;

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn().mockReturnValue("token12345"),
  removeItem: jest.fn(),
}));

jest.mock("../../test-utils/decodeToken", () => () => ({
  id: "12345",
  email: "mireia@gmail.com",
}));

const mockUser: User = {
  email: "mireia@gmail.com",
  id: "12345",
  token: "token",
};

jest.mock(
  "jwt-decode",
  () => () => ({ id: mockUser.id, email: mockUser.email } as JwtCustomPayload)
);

const dispatchSpy = jest.spyOn(store, "dispatch");

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

  describe("When it's method checkToken is invoked and there is a token", () => {
    test("Then the dispatch should be called with loginUserActionCreator and the user data", async () => {
      const {
        result: {
          current: { checkToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.removeItem = jest.fn().mockReturnValue(token);

      await checkToken();

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When its method checkToken is invoked and there is no token in AsyncStorage", () => {
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { checkToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.getItem = jest.fn().mockReturnValue("");

      await checkToken();

      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });
});
