import axios, { AxiosError } from "axios";
import { REACT_APP_API_SOCIAL } from "@env";
import { useAppDispatch } from "../../redux/hooks";
import { type UserRegisterCredentials } from "../../types";

const userRoutes = {
  usersRoute: "/users",
  registerRoute: "/register",
};

const useUser = () => {
  const dispatch = useAppDispatch();

  const url = REACT_APP_API_SOCIAL;

  const registerUser = async (userData: UserRegisterCredentials) => {
    try {
      await axios.post(
        `${url}${userRoutes.usersRoute}${userRoutes.registerRoute}`,
        userData
      );

      return true;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error("Error in user register");
      }
    }
  };

  return { registerUser };
};

export default useUser;
