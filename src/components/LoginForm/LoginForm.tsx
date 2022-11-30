import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useUser from "../../hooks/useUser/useUser";
import RoutesEnum from "../../navigation/routes";
import buttonStyles from "../../styles/buttonStyles";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import { type UserCredentials } from "../../types/types";
import CustomModal from "../Modal/CustomModal";
import styles from "../RegisterForm/RegisterFormStyles";
import loginFormStyles from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const intialFormData: UserCredentials = {
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(intialFormData);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(
      formData.email.length < 1 || formData.password.length < 1
    );
  }, [formData.email, formData.password]);

  const handleFormChange = (text: string, identify: string) => {
    setFormData({
      ...formData,
      [identify]: text,
    });
  };

  const handleSubmit = async () => {
    const formDataToSubmit: UserCredentials = {
      password: formData.password,
      email: formData.email,
    };

    await loginUser(formDataToSubmit);
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <CustomModal />
      <View style={styles.container}>
        <Text style={loginFormStyles.title} testID={"title"}>
          Identifícate
        </Text>
        <View>
          <View>
            <Text style={loginFormStyles.label}>Email</Text>
            <TextInput
              style={loginFormStyles.input}
              testID="email"
              maxLength={20}
              value={formData.email}
              onChangeText={(data) => {
                handleFormChange(data, "email");
              }}
            />
          </View>
          <View>
            <Text style={loginFormStyles.label}>Contraseña</Text>
            <TextInput
              style={loginFormStyles.input}
              testID="password"
              maxLength={32}
              value={formData.password}
              textContentType="password"
              onChangeText={(data) => {
                handleFormChange(data, "password");
              }}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            disabled={buttonDisabled}
            onPress={handleSubmit}
            testID={"submitButton"}
            style={
              buttonDisabled ? buttonStyles.buttonDisabled : buttonStyles.button
            }
          >
            <Text style={buttonStyles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <View style={loginFormStyles.infoContainer}>
            <Text style={loginFormStyles.info}>¿Aún no estás registrado?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutesEnum.register);
              }}
            >
              <Text style={loginFormStyles.link}>Ir al registro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
