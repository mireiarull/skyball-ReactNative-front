import axios from "axios";
import { REACT_APP_API_SKYBALL } from "@env";
import { useAppDispatch } from "../../redux/hooks";
import { type UserRegisterCredentials } from "../../types/types";
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
      dispatch(
        openModalActionCreator({
          isError: false,
          modalText: "Registrado!",
          buttonText: "Continuar",
        })
      );
    } catch {
      dispatch(
        openModalActionCreator({
          isError: true,
          modalText: "Este usuario ya está registrado",
          buttonText: "Volver",
        })
      );
    }
  };

  return { registerUser };
};

export default useUser;
