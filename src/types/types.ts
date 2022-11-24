export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  name: string;
  level: number;
  gender: string;
}

export interface JwtCustomPayload {
  id: string;
  email: string;
}