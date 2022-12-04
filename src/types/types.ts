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

export interface GameFormData {
  dateTime: string;
  location: {
    type: string;
    coordinates: number[];
  };
  beachName: string;
  level: number;
  gender: "M" | "F" | "X";
  format: number;
  spots: number;
  description: string;
  ball: boolean;
  net: boolean;
  rods: boolean;
  image: unknown;
}

export interface GameFilterData {
  date: string;
}
