import { renderHook } from "@testing-library/react";
import { registerDataMock } from "../../mocks/userMocks";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import ProviderWrapper from "../../test-utils/providerWrapper";
import { type UserRegisterCredentials } from "../../types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

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
        modalText: "Registered successfylly! Go to login",
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
        gender: "f",
        level: 2,
        name: "Mireia",
      };

      const actionPayload = {
        isError: false,
        modalText: "User already registered!",
      };

      await registerUser(newMockUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });
});
