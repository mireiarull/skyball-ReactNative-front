/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import backgroundImage from "./../../../assets/background-image.jpg";
import logo from "./../../../assets/skyball-logo-white.png";
import buttonStyles from "../../styles/buttonStyles";
import welcomeScreenStyles from "./WelcomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";

const WelcomeScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={welcomeScreenStyles.image}
        testID="backgroundImage"
      ></ImageBackground>
      <SafeAreaView>
        <View style={welcomeScreenStyles.container}>
          <View style={welcomeScreenStyles.imageContainer}>
            <Image source={logo}></Image>
          </View>
          <TouchableOpacity
            style={welcomeScreenStyles.button}
            testID={"submitButton"}
            onPress={() => {
              navigation.navigate(RoutesEnum.register);
            }}
          >
            <Text style={buttonStyles.buttonText}>Registrarme</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={welcomeScreenStyles.button}
            testID={"submitButton"}
            onPress={() => {
              navigation.navigate(RoutesEnum.login);
            }}
          >
            <Text style={buttonStyles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(RoutesEnum.home);
            }}
          >
            <Text style={welcomeScreenStyles.link}>
              Continuar como invitado
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;
