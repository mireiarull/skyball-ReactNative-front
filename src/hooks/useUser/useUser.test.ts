/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { renderHook } from "@testing-library/react";
import makeWrapper from "../../mocks/makeWrapper";
import { registerDataMock } from "../../mocks/userMocks";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { type User } from "../../redux/features/userSlice/types";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import ProviderWrapper from "../../test-utils/providerWrapper";
import {
  type UserCredentials,
  type UserRegisterCredentials,
} from "../../types/types";

import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn().mockReturnValue("token"),
  removeItem: jest.fn(),
}));

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("../../test-utils/decodeToken", () => () => ({
  id: "testid",
  email: "mireia@gmail.com",
}));

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Given the custom hook useUser", () => {
  describe("When registerUser is invoked with email 'mireia@gmail.com' and password '1234'", () => {
    test("Then dispatch should be called with openModalActionCreator", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const actionPayload = {
        isError: false,
        modalTitle: "Registrado!",
        modalText: "Bienvenido a skyball",
        buttonText: "Continuar",
      };

      await registerUser(registerDataMock);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with with email 'mireia@gmail.com', password '1234' but the user is already registered in the database", () => {
    test("Then dispatch should be called with openModalActionCreator and show the modal with an error message", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newMockUser: UserRegisterCredentials = {
        email: "mock@gmail.com",
        password: "1234",
        gender: "F",
        level: 2,
        name: "Mireia",
      };

      const actionPayload = {
        isError: true,
        modalTitle: "¡Ups!",
        modalText: "Ha habido un problema con el registro",
        buttonText: "Volver",
      };

      await registerUser(newMockUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When loginUser is invoked with email 'mireia@gmail.com' and password '12345'", () => {
    test("Then it should call the dispatch with loginUserActionCreator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapper,
      });

      const user: UserCredentials = {
        email: "mireia@gmail.com",
        password: "12345",
      };

      const actionPayload: User = {
        email: "mireia@gmail.com",
        id: "testid",
        token: "token",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(actionPayload)
      );
    });
  });

  describe("When loginUser is invoked with the email 'mireia@gmail.com' and the wrong password 'mockPassword'", () => {
    test("Then it should call the dispatch with openModalActionCreator and an error message", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapper,
      });

      const user: UserCredentials = {
        email: "mireia@gmail.com",
        password: "mockPassword",
      };

      const modalError = {
        isError: true,
        modalTitle: "Ha habido un error!",
        modalText: "Parece que ha habido un problema con el login",
        buttonText: "Volver",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalError)
      );
    });
  });

  describe("When loginUser is invoked with the email 'mireia@gmail.com' and the wrong password '654321'", () => {
    test("Then it should call the dispatch with openModalActionCreator and an error message", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapper,
      });

      const user: UserCredentials = {
        email: "mireia@gmail.com",
        password: "654321",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });
});
