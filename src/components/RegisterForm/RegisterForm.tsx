import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const onSubmit = () => {};

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding" enabled={true}>
        <View style={styles.container}>
          <Text style={styles.title}>Regístrate</Text>
          <View>
            <View>
              <Text style={styles.label}>Nombre y apellidos</Text>
              <TextInput
                style={styles.input}
                testID="name"
                maxLength={20}
                textContentType="name"
              />
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                textContentType="emailAddress"
                testID="email"
                accessibilityLabel="email"
                maxLength={32}
              />
            </View>
            <View>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                textContentType="password"
                testID="password"
                accessibilityLabel="password"
                maxLength={32}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterForm;
