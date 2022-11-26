/* eslint-disable @typescript-eslint/no-unsafe-call */
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
import welcomeScreenStyles from "./WelcomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";

const WelcomeScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
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
          <TouchableOpacity>
            <Text style={welcomeScreenStyles.link}>
              Continuar como invitado
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default WelcomeScreen;
