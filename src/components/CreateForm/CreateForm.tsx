import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useUser from "../../hooks/useUser/useUser";

import CustomModal from "../Modal/CustomModal";
import { Checkbox } from "../Checkbox/Checkbox";
import { type UserRegisterCredentials } from "../../types/types";
import inputStyles from "../../styles/inputStyles";
import buttonStyles from "../../styles/buttonStyles";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import styles from "../RegisterForm/RegisterFormStyles";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateForm = (): JSX.Element => {
  const { registerUser } = useUser();

  const intialFormData: GameStructure = {
    beachName: "",
    dateTime: new Date(),
    description: "",
    format: 0,
    gender: "X",
    image: "",
    level: 0,
    location: {
      coordinates: [0, 0],
      type: "Point",
    },
    spots: 0,
    players: [
      {
        id: "",
        material: [""],
        rol: "owner",
      },
    ],
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleFormChange = (text: string, identify: string) => {
    setFormData({
      ...formData,
      [identify]: text,
    });
  };

  const handleSubmit = async () => {
    // Const formDataToSubmit: UserRegisterCredentials = {
    //   password: formData.password,
    //   email: formData.email,
    //   name: formData.name,
    //   gender: formData.gender,
    //   level: formData.level,
    // };
    // await registerUser(formDataToSubmit);
  };

  const onChangeDateTime = (event, selectedDate?: Date) => {
    setFormData({
      ...formData,
      dateTime: selectedDate ?? formData.dateTime,
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <ScrollView>
        <CustomModal />
        <View style={styles.container}>
          <Text style={styles.title} testID={"title"}>
            Regístrate
          </Text>
          <View>
            <View>
              <Text style={inputStyles.label}>Nombre de la playa</Text>
              <TextInput
                style={inputStyles.input}
                testID="beachName"
                maxLength={20}
                placeholder="Playa del Bogatell"
                value={formData.beachName}
                accessibilityLabel="beach name"
                onChangeText={(data) => {
                  handleFormChange(data, "beachName");
                }}
              />
            </View>
            <View>
              <Text style={inputStyles.label}>Selecciona la fecha</Text>
              <DateTimePicker
                testID="datePicker"
                value={formData.dateTime}
                mode={"date"}
                onChange={onChangeDateTime}
                minimumDate={new Date()}
                locale="es-ES"
              />
            </View>
            <View>
              <Text style={inputStyles.label}>Selecciona la hora</Text>
              <DateTimePicker
                testID="timePicker"
                value={formData.dateTime}
                mode={"time"}
                is24Hour={true}
                onChange={onChangeDateTime}
                minuteInterval={10}
              />
            </View>
            <View>
              <Text style={inputStyles.label}>Categoría</Text>
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
                <Text style={styles.checkboxLabel}>Mixto</Text>
              </View>
            </View>
            <View>
              <Text style={inputStyles.label}>Nivel de juego</Text>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  selected={formData.level === 1}
                  testID="checkboxLevel1"
                  onPress={() => {
                    setFormData({ ...formData, level: 1 });
                  }}
                />
                <Text style={styles.checkboxLabel}>Iniciación</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  selected={formData.level === 2}
                  testID="checkboxLevel2"
                  onPress={() => {
                    setFormData({ ...formData, level: 2 });
                  }}
                />
                <Text style={styles.checkboxLabel}>Intermedio</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  selected={formData.level === 3}
                  testID="checkboxLevel3"
                  onPress={() => {
                    setFormData({ ...formData, level: 3 });
                  }}
                />
                <Text style={styles.checkboxLabel}>Intermedio alto</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  selected={formData.level === 4}
                  testID="checkboxLevel4"
                  onPress={() => {
                    setFormData({ ...formData, level: 4 });
                  }}
                />
                <Text style={styles.checkboxLabel}>Avanzado</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={buttonStyles.button}
              testID={"submitButton"}
            >
              <Text style={buttonStyles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateForm;
