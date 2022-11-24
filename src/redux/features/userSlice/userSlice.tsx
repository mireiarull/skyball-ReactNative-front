import { createSlice } from "@reduxjs/toolkit";
import loginUserReducer from "./reducers/loginUserReducer/loginUserReducer";
import { type UserState } from "./types";

const userInitialState: UserState = {
  id: "",
  email: "",
  isLogged: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUserReducer,
  },
});

export const userReducer = userSlice.reducer;
export const { loginUserReducer: loginUserActionCreator } = userSlice.actions;
