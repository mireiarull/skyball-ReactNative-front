/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
} from "react-native";
import image from "./../../../assets/background-image.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import buttonStyles from "../../styles/buttonStyles";
import styles from "./WelcomeScreenStyles";
import welcomeScreenStyles from "./WelcomeScreenStyles";

const WelcomeScreen = () => (
  <KeyboardAvoidingView behavior="padding" enabled={true}>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={welcomeScreenStyles.image}
      testID="backgroundImage"
    ></ImageBackground>
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={welcomeScreenStyles.button}
          testID={"submitButton"}
        >
          <Text style={buttonStyles.buttonText}>Registrarme</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={welcomeScreenStyles.button}
          testID={"submitButton"}
        >
          <Text style={buttonStyles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={welcomeScreenStyles.link}>Continuar como invitado</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </KeyboardAvoidingView>
);

export default WelcomeScreen;
