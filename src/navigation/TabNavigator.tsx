/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import RoutesEnum from "./routes";
import colorStyles from "../styles/colorStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faCirclePlus,
  faStar,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import ExploreScreen from "../screens/ExploreScreen/ExploreScreen";
import CreateScreen from "../screens/CreateScreen/CreateScreen";
import DetailScreen from "../screens/DetailScreen/DetailScreen";
import UpdateScreen from "../screens/UpdateScreen/UpdateScreen";
import CustomModal from "../components/Modal/CustomModal";
import useToken from "../hooks/useToken/useToken";
import { logoutUserActionCreator } from "../redux/features/userSlice/userSlice";
import { useNavigation } from "@react-navigation/native";
import { type LoginScreenNavigationProp } from "../types/navigation.types";

const TabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  const { isLogged } = useAppSelector((state) => state.user);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { removeToken } = useToken();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
    navigation.navigate(RoutesEnum.welcome);
  };

  return (
    <Tab.Navigator
      initialRouteName={RoutesEnum.explore}
      screenOptions={{
        tabBarActiveTintColor: colorStyles.main,
        tabBarInactiveTintColor: colorStyles.black,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={RoutesEnum.explore}
        component={ExploreScreen}
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faStar} size={size} color={color} />
          ),
        }}
      />
      {isLogged ? (
        <>
          <Tab.Screen
            name={RoutesEnum.create}
            component={CreateScreen}
            options={{
              title: "Crear partido",
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name={RoutesEnum.login}
          component={LoginScreen}
          options={{
            title: "Login",
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHome} size={size} color={color} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name={RoutesEnum.gameDetail}
        component={DetailScreen}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name={RoutesEnum.update}
        component={UpdateScreen}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name={RoutesEnum.logout}
        listeners={{
          tabPress: handleLogout,
        }}
        component={CustomModal}
        options={{
          title: "Salir",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
