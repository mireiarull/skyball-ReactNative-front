import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import styles from "./RegisterScreenStyles";

const RegisterScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <ScrollView>
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
            <RegisterForm />
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
