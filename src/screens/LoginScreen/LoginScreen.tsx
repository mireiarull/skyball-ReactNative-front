/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import LoginForm from "../../components/LoginForm/LoginForm";
import image from "../../../assets/skyball_splash.webp";
import styles from "./LoginScreenStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        testID="backgroundImage"
      ></ImageBackground>
      <SafeAreaView>
        <View>
          <TouchableOpacity
            testID="backArrow"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={50}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <LoginForm />
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
