/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  mockInitialGamesState,
  mockInitialStore,
  mockInitialUiState,
  mockInitialUserState,
} from "../../mocks/uiMocks";
import { screen, fireEvent, render } from "@testing-library/react-native";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import CustomModal from "./CustomModal";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { Provider } from "react-redux";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given a CustomModal component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a modal with text 'Success'", async () => {
      const expectedText = "Success";

      renderWithProviders(<CustomModal />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesState,
        },
      });

      const modalText = await screen.getByText(expectedText);

      expect(modalText).toBeDefined();
    });
  });

  describe("When it's rendered with isError true", () => {
    test("Then it should show an alert sign wit '!'", async () => {
      const expectedErrorText = "!";

      renderWithProviders(<CustomModal />, {
        preloadedState: {
          ui: { ...mockInitialUiState, isError: true },
          user: mockInitialUserState,
        },
      });

      const modalErrorText = await screen.getByText(expectedErrorText);

      expect(modalErrorText).toBeDefined();
    });
  });

  describe("And the user clicks on the button with text 'Continue'", () => {
    test("Then it should call dispatch with closeModalActionCreator", async () => {
      const buttonId = "modalButton";

      render(
        <Provider store={mockInitialStore}>
          <CustomModal />
        </Provider>
      );

      const button = await screen.getByTestId(buttonId);
      fireEvent.press(button);

      expect(dispatchSpy).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });
});
