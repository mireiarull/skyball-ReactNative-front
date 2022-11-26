export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  name: string;
  level: number;
  gender: "F" | "M" | "X";
}

export interface JwtCustomPayload {
  id: string;
  email: string;
}

export interface LoginResponse {
  token: string;
}
