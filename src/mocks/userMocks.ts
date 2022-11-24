import { type UserRegisterCredentials } from "../types/types";

export const registerDataMock: UserRegisterCredentials = {
  password: "1234",
  email: "mireia@gmail.com",
  gender: "f",
  level: 2,
  name: "Mireia",
};

export const loginUserMock = {
  id: "1",
  email: "mireia@gmail.com",
  token: "token12345",
  isLogged: false,
};

export const emptyUserMock = {
  id: "",
  email: "",
  token: "",
  isLogged: false,
};
