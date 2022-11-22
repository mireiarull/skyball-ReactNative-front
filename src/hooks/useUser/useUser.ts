import axios from "axios";
import { REACT_APP_API_SKYBALL } from "@env";
import { useAppDispatch } from "../../redux/hooks";
import { type UserRegisterCredentials } from "../../types";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";

const userRoutes = {
  usersRoute: "/users",
  registerRoute: "/register",
};

const useUser = () => {
  const dispatch = useAppDispatch();

  const registerUser = async (userData: UserRegisterCredentials) => {
    try {
      await axios.post(
        `${REACT_APP_API_SKYBALL}${userRoutes.usersRoute}${userRoutes.registerRoute}`,
        userData
      );
      dispatch(openModalActionCreator("Registered successfylly! Go to login"));
    } catch (error: unknown) {
      dispatch(openModalActionCreator("User already registered!"));
    }
  };

  return { registerUser };
};

export default useUser;
