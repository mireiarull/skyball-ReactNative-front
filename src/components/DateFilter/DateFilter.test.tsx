/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fireEvent, screen } from "@testing-library/react-native";
import { DateTime } from "luxon";
import React from "react";
import { addFilterActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import DateFilter from "./DateFilter";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("@react-native-community/datetimepicker", () => {
  const mockComponent = require("react-native/jest/mockComponent");
  return mockComponent("@react-native-community/datetimepicker");
});

describe("Given a date filter component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text '¿Cuándo quieres jugar?' and three buttons", () => {
      const title = "¿Cuándo quieres jugar?";
      const todayButton = "HOY";
      const tomorrowButton = "MAÑANA";
      const dayPickerId = "datePicker";

      renderWithProviders(<DateFilter />);

      const expectedTitle = screen.queryByText(title);
      const expectedTodayButton = screen.queryByText(todayButton);
      const expectedTomorrowButton = screen.queryByText(tomorrowButton);
      const expectedDayPicker = screen.queryByTestId(dayPickerId);

      expect(expectedTitle).toBeDefined();
      expect(expectedTodayButton).toBeDefined();
      expect(expectedTomorrowButton).toBeDefined();
      expect(expectedDayPicker).toBeDefined();
    });
  });

  describe("And the user clicks on the today button", () => {
    test("Then the dispatch should be called with addFilterActionCreator", () => {
      mockedDate = DateTime.now().toFormat("yyyy-MM-dd");
      const todayButton = "HOY";

      renderWithProviders(<DateFilter />, { store });

      const expectedTodayButton = screen.queryByText(todayButton);

      fireEvent.press(expectedTodayButton);

      expect(dispatchSpy).toHaveBeenCalledWith(
        addFilterActionCreator(mockedDate)
      );
    });
  });

  describe("And the user clicks on the tomorrow button", () => {
    test("Then the dispatch should be called with addFilterActionCreator", () => {
      mockedDate = DateTime.now().plus({ days: 1 }).toFormat("yyyy-MM-dd");
      const tomorrowButton = "MAÑANA";

      renderWithProviders(<DateFilter />, { store });

      const expectedTomorrowButton = screen.queryByText(tomorrowButton);

      fireEvent.press(expectedTomorrowButton);

      expect(dispatchSpy).toHaveBeenCalledWith(
        addFilterActionCreator(mockedDate)
      );
    });
  });

  describe("And the user clicks on the date picker button", () => {
    test("Then it should update the date and call dispatch", async () => {
      mockedDate = new Date();
      renderWithProviders(<DateFilter />, { store });

      const datePickerButton = screen.getByTestId("datePicker");

      fireEvent(datePickerButton, "onChange", {}, mockedDate);

      const filterDate = mockedDate?.toISOString().slice(0, 10);

      expect(dispatchSpy).toHaveBeenCalledWith(
        addFilterActionCreator(filterDate)
      );
    });
  });

  describe("And the user clicks on the 'Eliminar filtros' button", () => {
    test("Then the dispatch should be called with addFilterActionCreator", () => {
      const resetButton = "Eliminar filtros";

      renderWithProviders(<DateFilter />, { store });

      const expectedTodayButton = screen.queryByText(resetButton);

      fireEvent.press(expectedTodayButton);

      expect(dispatchSpy).toHaveBeenCalledWith(addFilterActionCreator(""));
    });
  });

  test("Then it should update the date and call dispatch", () => {
    mockedDate = DateTime.now().toFormat("yyyy-MM-dd");
    renderWithProviders(<DateFilter />, { store });

    const datePickerButton = screen.getByTestId("datePicker");

    fireEvent(datePickerButton, "onChange", {
      NativeEvent: { selectedDate: mockedDate },
    });

    expect(dispatchSpy).toHaveBeenCalled();
  });
});
