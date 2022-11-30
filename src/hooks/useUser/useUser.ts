import axios from "axios";
import { REACT_APP_API_SKYBALL } from "@env";
import { useAppDispatch } from "../../redux/hooks";
import {
  type LoginResponse,
  type UserCredentials,
  type UserRegisterCredentials,
} from "../../types/types";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import decodeToken from "../../test-utils/decodeToken";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";

const userRoutes = {
  usersRoute: "/users",
  registerRoute: "/register",
};

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const registerUser = async (userData: UserRegisterCredentials) => {
    try {
      await axios.post(
        `${REACT_APP_API_SKYBALL}${userRoutes.usersRoute}${userRoutes.registerRoute}`,
        userData
      );
      dispatch(
        openModalActionCreator({
          isError: false,
          modalText: "",
          modalTitle: "Registrado!",
          buttonText: "Continuar",
        })
      );
    } catch {
      dispatch(
        openModalActionCreator({
          isError: true,
          modalText: "Ha habido un problema con el registro",
          modalTitle: "¡Ups!",
          buttonText: "Volver",
        })
      );
    }
  };

  const loginUser = async (userData: UserCredentials) => {
    try {
      const responseData = await axios.post<LoginResponse>(
        `${REACT_APP_API_SKYBALL}/users/login`,
        userData
      );

      const { token } = responseData.data;
      const userLogged = decodeToken(token);

      dispatch(
        loginUserActionCreator({
          ...userLogged,
          token,
        })
      );
      await AsyncStorage.setItem("token", token);
      navigation.navigate(RoutesEnum.home);

      dispatch(
        openModalActionCreator({
          isError: false,
          modalTitle: "¡Listo para jugar!",
          modalText: "Ya puedes empezar a jugar todos los partidos nivelados",
          buttonText: "¡A jugar!",
        })
      );
      return;
    } catch {
      dispatch(
        openModalActionCreator({
          isError: true,
          modalTitle: "Ha habido un error!",
          modalText: "Parece que ha habido un problema con el login",
          buttonText: "Volver",
        })
      );
    }
  };

  return { registerUser, loginUser };
};

export default useUser;
