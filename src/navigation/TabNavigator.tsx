import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAppSelector } from "../redux/hooks";
import RoutesEnum from "./routes";
import colorStyles from "../styles/colorStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faCirclePlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import ExploreScreen from "../screens/ExploreScreen/ExploreScreen";

const TabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  const { isLogged } = useAppSelector((state) => state.user);

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
            component={WelcomeScreen}
            options={{
              title: "Create",
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
    </Tab.Navigator>
  );
};

export default TabNavigator;
