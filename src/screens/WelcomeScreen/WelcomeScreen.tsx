/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  Image,
} from "react-native";
import backgroundImage from "./../../../assets/background-image.jpg";
import logo from "./../../../assets/skyball-logo-white.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import buttonStyles from "../../styles/buttonStyles";
import styles from "./WelcomeScreenStyles";
import welcomeScreenStyles from "./WelcomeScreenStyles";

const WelcomeScreen = () => (
  <KeyboardAvoidingView behavior="padding" enabled={true}>
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={welcomeScreenStyles.image}
      testID="backgroundImage"
    ></ImageBackground>
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={logo}></Image>
        </View>

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
