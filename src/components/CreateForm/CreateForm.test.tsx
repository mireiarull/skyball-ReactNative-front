/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { screen, fireEvent } from "@testing-library/react-native";
import CreateForm from "./CreateForm";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import {
  mockInitialGamesState,
  mockInitialUiState,
  mockInitialUserState,
} from "../../mocks/uiMocks";
import { getRandomGame } from "../../factories/gamesFactory";
import { type ImagePickerResult } from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import { type MapPressEvent } from "react-native-maps";

const mockCreateGame = jest.fn();
const mockLoadAllGames = jest.fn();
const mockUpdateOneGame = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => () => ({
  addOneGame: mockCreateGame,
  loadAllGames: mockLoadAllGames,
  updateOneGame: mockUpdateOneGame,
}));

jest.mock("expo-image-picker", () => ({
  launchImageLibraryAsync: jest.fn().mockResolvedValue({
    canceled: false,
    assets: [{ uri: "abc.jpeg" }],
    type: "image",
    width: "200",
    height: "200",
  }),
  MediaTypeOptions: jest.fn(),
}));

const mockedImagePicker = jest.mocked(ImagePicker);

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("@react-native-community/datetimepicker", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mockComponent = require("react-native/jest/mockComponent");
  return mockComponent("@react-native-community/datetimepicker");
});

jest.mock("react-native-maps", () => {
  const mockComponent = require("react-native/jest/mockComponent");
  return mockComponent("react-native-maps");
});

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
      expect(spotsField.props.value).toBe("5");
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

  describe("And the user clicks on the submit button", () => {
    test("Then it should call addOne with the form information", async () => {
      const submitButtonText = "Enviar";

      renderWithProviders(<CreateForm />, {
        preloadedState: {
          ui: { ...mockInitialUiState, showModal: false, isLoading: false },
          user: mockInitialUserState,
          games: mockInitialGamesState,
        },
      });

      const beachNameField = await screen.getByTestId(beachNameId);
      const spotsField = await screen.getByTestId(spotsId);
      fireEvent.changeText(beachNameField, "test beach");
      fireEvent.changeText(spotsField, 5);

      checkboxIds.forEach((id) => {
        const checkbox = screen.getByTestId(id);
        fireEvent.press(checkbox);
      });

      const submitButton = await screen.getByText(submitButtonText);
      fireEvent.press(submitButton);

      expect(mockCreateGame).toHaveBeenCalled();
    });
  });

  describe("When it's rendered to update one game and the user click on the 'Enviar' button", () => {
    test("Then it should call updateOneGame with the form information", async () => {
      const submitButtonText = "Enviar";
      const game = getRandomGame;

      renderWithProviders(<CreateForm currentGame={game} />, {
        preloadedState: {
          ui: { ...mockInitialUiState, showModal: false, isLoading: false },
          user: mockInitialUserState,
          games: mockInitialGamesState,
        },
      });

      const beachNameField = await screen.getByTestId(beachNameId);
      const spotsField = await screen.getByTestId(spotsId);
      fireEvent.changeText(beachNameField, "test beach");
      fireEvent.changeText(spotsField, 5);

      checkboxIds.forEach((id) => {
        const checkbox = screen.getByTestId(id);
        fireEvent.press(checkbox);
      });

      const submitButton = await screen.getByText(submitButtonText);
      fireEvent.press(submitButton);

      expect(mockUpdateOneGame).toHaveBeenCalled();
    });
  });

  describe("And the user clicks on the load image icon", () => {
    test("Then it should set the image form state", async () => {
      renderWithProviders(<CreateForm />);

      const pickImageButton = screen.getByTestId("image-picker");

      fireEvent.press(pickImageButton);

      expect(mockedImagePicker.launchImageLibraryAsync).toBeCalledTimes(1);
    });
  });

  describe("And the user clicks on the load image icon and the image doesn't have an extension", () => {
    test("Then it should set the image form state", async () => {
      mockedImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
        canceled: false,
        assets: [{ uri: "abc" }],
        type: "image",
      });

      renderWithProviders(<CreateForm />);

      const pickImageButton = screen.getByTestId("image-picker");

      fireEvent.press(pickImageButton);

      expect(mockedImagePicker.launchImageLibraryAsync).toBeCalledTimes(1);
    });
  });

  describe("And the user clicks on the load image icon and the image picker is cancelled", () => {
    test("Then it should set the image form state", async () => {
      mockedImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
        canceled: true,
      } as ImagePickerResult);

      renderWithProviders(<CreateForm />);

      const pickImageButton = screen.getByTestId("image-picker");

      fireEvent.press(pickImageButton);

      expect(mockedImagePicker.launchImageLibraryAsync).toBeCalledTimes(1);
    });
  });

  describe("And the user clicks on the date button", () => {
    test("Then it should set the dateTime form state", () => {
      renderWithProviders(<CreateForm />);

      const datePickerButton = screen.getByTestId("datePicker");

      fireEvent(datePickerButton, "onChange", {
        nativeEvent: { timestamp: "01/01/1976" },
      });

      fireEvent(datePickerButton, "onChange", null, {
        timestamp: "01/01/1976",
      });
      expect(datePickerButton.props.value).toEqual({ timestamp: "01/01/1976" });
    });
  });

  describe("And the user clicks on the map to set a location", () => {
    test("Then it should set the longitude and latitude from the form state", () => {
      renderWithProviders(<CreateForm />);

      const map = screen.getByTestId("map");

      fireEvent(map, "onPress", {
        nativeEvent: {
          coordinate: {
            latitude: 41.39276232121168,
            longitude: 2.203637547791004,
          },
        },
      });

      const marker = screen.getByTestId("marker");

      expect(marker).toBeDefined();
    });
  });
});
