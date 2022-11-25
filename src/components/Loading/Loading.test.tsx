/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the loading gif", async () => {
      const loadingId = "loading";

      render(
        <Provider store={store}>
          <Loading />
        </Provider>
      );

      const loading = screen.getByTestId(loadingId);

      expect(loading).toBeDefined();
    });
  });
});
