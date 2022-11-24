/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import LoginForm from "../../components/LoginForm/LoginForm";
import image from "../../../assets/skyball_splash.webp";
import styles from "./LoginScreenStyles";

const LoginScreen = () => (
  <KeyboardAvoidingView behavior="padding" enabled={true}>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
      testID="backgroundImage"
    ></ImageBackground>
    <SafeAreaView>
      <View>
        <LoginForm />
      </View>
    </SafeAreaView>
  </KeyboardAvoidingView>
);

export default LoginScreen;
