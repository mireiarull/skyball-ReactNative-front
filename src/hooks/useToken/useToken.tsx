import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../redux/hooks";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import decodeToken from "../../test-utils/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const checkToken = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const user = decodeToken(token);
      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const removeToken = async () => {
    await AsyncStorage.removeItem("token");
  };

  return { checkToken, removeToken };
};

export default useToken;
