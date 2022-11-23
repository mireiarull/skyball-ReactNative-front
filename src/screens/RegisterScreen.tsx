import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterScreen = () => (
  <KeyboardAvoidingView behavior="padding" enabled={true}>
    <ScrollView>
      <SafeAreaView>
        <View>
          <RegisterForm />
        </View>
      </SafeAreaView>
    </ScrollView>
  </KeyboardAvoidingView>
);

export default RegisterScreen;
