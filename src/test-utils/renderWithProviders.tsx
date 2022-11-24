import React, { type PropsWithChildren } from "react";
import { render } from "@testing-library/react-native";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { type store, type RootState } from "../redux/store";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { ui: uiReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({
    children,
  }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
