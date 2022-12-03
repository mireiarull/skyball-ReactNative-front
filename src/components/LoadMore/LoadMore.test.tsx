/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { type Pagination } from "../../redux/features/uiSlice/types";
import { goToNextPageActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import LoadMore from "./LoadMore";

const dispatchSpy = jest.spyOn(store, "dispatch");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a LoadMore component", () => {
  describe("When it's rendered with current page 0 and total pages 2 and the user clicks on the button", () => {
    test("Then it should show a button with text 'ver mas' and call dispatch", () => {
      const expectedText = "VER MÁS";
      const mockPagination: Pagination = {
        currentPage: 0,
        totalPages: 2,
      };

      renderWithProviders(<LoadMore pagination={mockPagination} />, { store });

      const button = screen.queryByText(expectedText);
      fireEvent.press(button);

      expect(button).toBeDefined();
      expect(dispatchSpy).toHaveBeenCalledWith(goToNextPageActionCreator());
    });
  });

  describe("When it's rendered and it's the last page and the user clicks on the button", () => {
    test("Then it should not call dispatch", () => {
      const expectedText = "VER MÁS";
      const mockPagination: Pagination = {
        currentPage: 0,
        totalPages: 1,
      };

      renderWithProviders(<LoadMore pagination={mockPagination} />, { store });

      const button = screen.queryByText(expectedText);
      fireEvent.press(button);

      expect(dispatchSpy).not.toBeCalled();
    });
  });
});
