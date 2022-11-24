/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { mockInitialStore, mockInitialUiState } from "../../mocks/uiMocks";
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
        },
      });

      const modalText = await screen.getByText(expectedText);

      expect(modalText).toBeDefined();
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
