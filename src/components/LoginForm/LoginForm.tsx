import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useUser from "../../hooks/useUser/useUser";
import buttonStyles from "../../styles/buttonStyles";
import {
  type UserCredentials,
  type UserRegisterCredentials,
} from "../../types/types";
import CustomModal from "../Modal/CustomModal";
import styles from "../RegisterForm/RegisterFormStyles";
import loginFormStyles from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const intialFormData: UserRegisterCredentials = {
    password: "",
    email: "",
    name: "",
    gender: "",
    level: 0,
  };

  const [formData, setFormData] = useState(intialFormData);

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
              accessibilityLabel="email"
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
              accessibilityLabel="password"
              onChangeText={(data) => {
                handleFormChange(data, "password");
              }}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={buttonStyles.button}
            testID={"submitButton"}
          >
            <Text style={buttonStyles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
