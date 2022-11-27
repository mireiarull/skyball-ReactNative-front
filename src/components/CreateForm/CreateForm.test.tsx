/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, fireEvent } from "@testing-library/react-native";
import CreateForm from "./CreateForm";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import {
  mockInitialGamesState,
  mockInitialUiState,
  mockInitialUserState,
} from "../../mocks/uiMocks";

describe("Given a CreateForm component", () => {
  const checkboxIds = [
    "checkboxFemale",
    "checkboxMale",
    "checkboxNoGender",
    "checkboxLevel1",
    "checkboxLevel2",
    "checkboxLevel3",
    "checkboxLevel4",
    "checkboxFormat2",
    "checkboxFormat3",
    "checkboxFormat4",
    "checkboxNet",
    "checkboxBall",
    "checkboxRods",
  ];

  const beachNameId = "beachName";
  const spotsId = "spots";
  const descriptionId = "description";

  const mockLoginUser = jest.fn();

  jest.mock("../../hooks/useUser/useUser", () => () => ({
    login: mockLoginUser,
  }));

  describe("When it's rendererd", () => {
    test("Then it should show a title with text 'Crear nuevo partido'", async () => {
      const expectedText = "Crear nuevo partido";

      renderWithProviders(<CreateForm />);

      const title = await screen.getByText(expectedText);

      expect(title).toBeDefined();
    });
  });

  describe("And the user fills in the form", () => {
    test("Then the written text should show on the input", async () => {
      renderWithProviders(<CreateForm />);

      const beachNameField = await screen.getByTestId(beachNameId);
      const spotsField = await screen.getByTestId(spotsId);
      const descriptionField = await screen.getByTestId(descriptionId);
      fireEvent.changeText(beachNameField, "test beach");
      fireEvent.changeText(spotsField, 5);
      fireEvent.changeText(descriptionField, "test description");

      expect(beachNameField.props.value).toBe("test beach");
      expect(spotsField.props.value).toBe(5);
      expect(descriptionField.props.value).toBe("test description");
    });
  });

  describe("And the user clicks on the checkboxes", () => {
    test("Then it should set the form state", async () => {
      renderWithProviders(<CreateForm />);

      checkboxIds.forEach((id) => {
        const checkbox = screen.getByTestId(id);
        fireEvent.press(checkbox);
        expect(checkbox).toHaveAccessibilityState({ selected: true });
      });
    });
  });

  // Describe("And the user clicks on the submit button", () => {
  //   test("Then it should call registerUser with the form information", async () => {
  //     const submitButtonText = "Continuar";

  //     renderWithProviders(<CreateForm />, {
  //       preloadedState: {
  //         ui: mockInitialUiState,
  //         user: mockInitialUserState,
  //         games: mockInitialGamesState,
  //       },
  //     });

  //     const beachNameField = await screen.getByTestId(beachNameId);
  //     const spotsField = await screen.getByTestId(spotsId);
  //     fireEvent.changeText(beachNameField, "test beach");
  //     fireEvent.changeText(spotsField, 5);

  //     checkboxIds.forEach((id) => {
  //       const checkbox = screen.getByTestId(id);
  //       fireEvent.press(checkbox);
  //     });

  //     const submitButton = await screen.getByText(submitButtonText);
  //     fireEvent.press(submitButton);

  //     expect(mockLoginUser).toHaveBeenCalled();
  //   });
  // });
});
