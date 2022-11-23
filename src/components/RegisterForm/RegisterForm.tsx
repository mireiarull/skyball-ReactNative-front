import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useUser from "../../hooks/useUser/useUser";
import { type UserRegisterCredentials } from "../../types";
import CustomModal from "../Modal/CustomModal";
import styles from "./RegisterFormStyled";
import { Checkbox } from "../Checkbox/Checkbox";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();

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
    const formDataToSubmit: UserRegisterCredentials = {
      password: formData.password,
      email: formData.email,
      name: formData.name,
      gender: formData.gender,
      level: formData.level,
    };

    await registerUser(formDataToSubmit);
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <CustomModal />
      <View style={styles.container}>
        <Text style={styles.title} testID={"title"}>
          Regístrate
        </Text>
        <View>
          <View>
            <Text style={styles.label}>Nombre y apellidos</Text>
            <TextInput
              style={styles.input}
              testID="name"
              maxLength={20}
              value={formData.name}
              textContentType="name"
              accessibilityLabel="name"
              onChangeText={(data) => {
                handleFormChange(data, "name");
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              testID="email"
              maxLength={32}
              value={formData.email}
              textContentType="emailAddress"
              accessibilityLabel="email"
              onChangeText={(data) => {
                handleFormChange(data, "email");
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
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
          <View>
            <Text style={styles.label}>Genero</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                selected={formData.gender === "F"}
                onPress={() => {
                  setFormData({ ...formData, gender: "F" });
                }}
                testID="checkboxFemale"
              />
              <Text style={styles.checkboxLabel}>Femenino</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                selected={formData.gender === "M"}
                onPress={() => {
                  setFormData({ ...formData, gender: "M" });
                }}
                testID="checkboxMale"
              />
              <Text style={styles.checkboxLabel}>Masculino</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                selected={formData.gender === "X"}
                testID="checkboxNoGender"
                onPress={() => {
                  setFormData({ ...formData, gender: "X" });
                }}
              />
              <Text style={styles.checkboxLabel}>Prefiero no decirlo</Text>
            </View>
          </View>
          <View>
            <Text style={styles.label}>Nivel</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                selected={formData.level === 1}
                testID="checkboxLevel1"
                onPress={() => {
                  setFormData({ ...formData, level: 1 });
                }}
              />
              <Text style={styles.checkboxLabelTitle}>Iniciación</Text>
            </View>
            <Text style={styles.checkboxDescription}>
              Jugador que acaba de empezar a jugar a volei playa. Pelotea y está
              aprendiendo a moverse por la arena
            </Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                selected={formData.level === 2}
                testID="checkboxLevel2"
                onPress={() => {
                  setFormData({ ...formData, level: 2 });
                }}
              />
              <Text style={styles.checkboxLabelTitle}>Intermedio</Text>
            </View>
            <Text style={styles.checkboxDescription}>
              Jugador que lleva un año practicando y puede haber tomado alguna
              clase. Tiene conocimientos básicos de táctica en defensa, dominio
              de antebrazos y de algunos golpes de ataque
            </Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                selected={formData.level === 3}
                testID="checkboxLevel3"
                onPress={() => {
                  setFormData({ ...formData, level: 3 });
                }}
              />
              <Text style={styles.checkboxLabelTitle}>Intermedio alto</Text>
            </View>
            <Text style={styles.checkboxDescription}>
              Jugador con más o menos tres años de experiencia con amplia
              variedad de ataques y dominio de la técnica.
            </Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                selected={formData.level === 4}
                testID="checkboxLevel4"
                onPress={() => {
                  setFormData({ ...formData, level: 4 });
                }}
              />
              <Text style={styles.checkboxLabelTitle}>Avanzado</Text>
            </View>
            <Text style={styles.checkboxDescription}>
              Jugador habitual de volei playa con mucha experiencia en campo y
              juego estratégico.
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.button}
            testID={"submitButton"}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
