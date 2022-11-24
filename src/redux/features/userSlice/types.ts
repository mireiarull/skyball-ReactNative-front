export interface User {
  id: string;
  email: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}
