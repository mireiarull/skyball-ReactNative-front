import type { PayloadAction } from "@reduxjs/toolkit";
import { type User, type UserState } from "../../types";

const loginUserReducer = (
  previousUser: UserState,
  action: PayloadAction<User>
) => ({
  ...previousUser,
  ...action.payload,
  isLogged: true,
});

export default loginUserReducer;
