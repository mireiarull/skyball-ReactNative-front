import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import { gamesReducer } from "./features/gamesSlice/gamesSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    games: gamesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
