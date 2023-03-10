import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import CustomModal from "../Modal/CustomModal";
import { Checkbox } from "../Checkbox/Checkbox";
import inputStyles from "../../styles/inputStyles";
import buttonStyles from "../../styles/buttonStyles";
import * as ImagePicker from "expo-image-picker";
import styles from "../RegisterForm/RegisterFormStyles";
import DateTimePicker from "@react-native-community/datetimepicker";
import createFormStyles from "./CreateFormStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import useGames from "../../hooks/useGames/useGames";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  type MapPressEvent,
} from "react-native-maps";
import { mapStyle } from "../Map/MapStyles";

interface CreateFormProps {
  currentGame?: GameStructure;
}

const CreateForm = ({ currentGame }: CreateFormProps): JSX.Element => {
  const { addOneGame, loadAllGames, updateOneGame } = useGames();

  let initialFormData = {
    beachName: "",
    dateTime: new Date(),
    description: "",
    format: 0,
    gender: "X",
    image: {
      type: "",
      uri: "",
      name: "",
    },
    level: 0,
    location: {
      coordinates: [0, 0],
      type: "Point",
    },
    spots: 0,
    ball: false,
    net: false,
    rods: false,
    latitude: 0,
    longitude: 0,
  };

  if (currentGame) {
    initialFormData = {
      beachName: currentGame.beachName,
      dateTime: new Date(),
      description: currentGame.description,
      format: currentGame.format,
      gender: currentGame.gender,
      image: currentGame.backupImage,
      level: currentGame.level,
      spots: currentGame.spots,
      ball: currentGame.players[0].material.ball,
      net: currentGame.players[0].material.net,
      rods: currentGame.players[0].material.rods,
      latitude: currentGame.location.coordinates[1],
      longitude: currentGame.location.coordinates[0],
    };
  }

  const [formData, setFormData] = useState(initialFormData);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [imageSelected, setImageSelected] = useState("");
  const [imageType, setImageType] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    setButtonDisabled(
      formData.beachName.length < 1 ||
        formData.format < 0 ||
        formData.gender.length < 1 ||
        formData.level < 0 ||
        formData.spots < 0 ||
        imageSelected.length < 0
    );
  }, [
    formData.beachName,
    formData.format,
    formData.gender,
    formData.level,
    formData.spots,
    formData.image.name,
  ]);

  const handleSubmit = async () => {
    const newGame = new FormData();
    newGame.append("beachName", formData.beachName);
    newGame.append("dateTime", formData.dateTime.toISOString());
    newGame.append("description", formData.description);
    newGame.append("format", formData.format.toString());
    newGame.append("gender", formData.gender);
    newGame.append("level", formData.level.toString());
    newGame.append("spots", formData.spots.toString());
    newGame.append("net", formData.net.toString());
    newGame.append("ball", formData.ball.toString());
    newGame.append("rods", formData.rods.toString());
    newGame.append("latitude", formData.latitude.toString());
    newGame.append("longitude", formData.longitude.toString());
    newGame.append("image", {
      type: imageType,
      uri: imageSelected,
      name: imageName,
    });

    if (currentGame) {
      await updateOneGame(currentGame.id!, newGame);
      await loadAllGames();
      return;
    }

    await addOneGame(newGame);
    await loadAllGames();
  };

  const onChangeDateTime = (event, selectedDate?: Date) => {
    setFormData({
      ...formData,
      dateTime: selectedDate ?? formData.dateTime,
    });
  };

  const toggleMaterial = (item: "net" | "ball" | "rods") => {
    setFormData({
      ...formData,
      [item]: !formData[item],
    });
  };

  const handleFormChange = (text: string, identify: string) => {
    setFormData({
      ...formData,
      [identify]: text,
    });
  };

  const chooseFile = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });
    if (!result.canceled) {
      const localUri = result.assets[0].uri;
      setImageSelected(localUri);
      const filename = localUri.split("/").pop();
      setImageName(filename!);
      const match = /\.(\w+)$/.exec(filename!);
      const type = match ? `image/${match[1]}` : `image`;
      setImageType(type);
    }
  };

  const [marker, setMarker] = useState<unknown>("");

  const getLocation = (event: MapPressEvent) => {
    setMarker(event.nativeEvent.coordinate);
    setFormData({
      ...formData,
      longitude: event.nativeEvent.coordinate.longitude,
      latitude: event.nativeEvent.coordinate.latitude,
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <ScrollView>
        <CustomModal />
        <View style={styles.container}>
          {currentGame ? (
            <Text style={styles.title} testID={"title"}>
              Editar mi partido
            </Text>
          ) : (
            <Text style={styles.title} testID={"title"}>
              Crear nuevo partido
            </Text>
          )}

          <View>
            <View>
              <Text style={inputStyles.label}>Nombre de la playa</Text>
              <TextInput
                style={inputStyles.input}
                testID="beachName"
                nativeID="beachName"
                maxLength={40}
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
              <Text style={inputStyles.label}>Categor??a</Text>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  type="radio"
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
                  key={"checkboxGenderFemale"}
                  type="radio"
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
                  key={"checkboxGenderMale"}
                  type="radio"
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
                  key={"checkboxGenderMixt"}
                  type="radio"
                  selected={formData.level === 1}
                  testID="checkboxLevel1"
                  onPress={() => {
                    setFormData({ ...formData, level: 1 });
                  }}
                />
                <Text style={styles.checkboxLabel}>Iniciaci??n</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  type="radio"
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
                  type="radio"
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
                  type="radio"
                  selected={formData.level === 4}
                  testID="checkboxLevel4"
                  onPress={() => {
                    setFormData({ ...formData, level: 4 });
                  }}
                />
                <Text style={styles.checkboxLabel}>Avanzado</Text>
              </View>
            </View>
            <View>
              <Text style={inputStyles.label}>Numero de jugadores</Text>
              <TextInput
                style={inputStyles.input}
                testID="spots"
                maxLength={20}
                placeholder="6 (tu incluido)"
                value={formData.spots.toString()}
                accessibilityLabel="spots"
                keyboardType={"numeric"}
                onChangeText={(data) => {
                  handleFormChange(data, "spots");
                }}
              />
            </View>
            <View>
              <Text style={inputStyles.label}>Modalidad</Text>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  type="radio"
                  selected={formData.format === 2}
                  onPress={() => {
                    setFormData({ ...formData, format: 2 });
                  }}
                  testID="checkboxFormat2"
                />
                <Text style={styles.checkboxLabel}>2 vs 2</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  type="radio"
                  selected={formData.format === 3}
                  onPress={() => {
                    setFormData({ ...formData, format: 3 });
                  }}
                  testID="checkboxFormat3"
                />
                <Text style={styles.checkboxLabel}>3 vs 3</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  type="radio"
                  selected={formData.format === 4}
                  testID="checkboxFormat4"
                  onPress={() => {
                    setFormData({ ...formData, format: 4 });
                  }}
                />
                <Text style={styles.checkboxLabel}>4 vs 4</Text>
              </View>
            </View>
            <View>
              <Text style={inputStyles.label}>Material que vas a traer</Text>
              <View style={createFormStyles.materialCheckboxContainer}>
                <Checkbox
                  text="RED"
                  type="button"
                  testID="checkboxNet"
                  selected={formData.net}
                  onPress={() => {
                    toggleMaterial("net");
                  }}
                />
                <Checkbox
                  text="PELOTA"
                  type="button"
                  testID="checkboxBall"
                  selected={formData.ball}
                  onPress={() => {
                    toggleMaterial("ball");
                  }}
                />
                <Checkbox
                  text="BARILLAS"
                  type="button"
                  testID="checkboxRods"
                  selected={formData.rods}
                  onPress={() => {
                    toggleMaterial("rods");
                  }}
                />
              </View>
              <View>
                <Text style={inputStyles.label}>Comentarios</Text>
                <TextInput
                  style={inputStyles.inputTextArea}
                  multiline={true}
                  numberOfLines={4}
                  testID="description"
                  value={formData.description}
                  accessibilityLabel="description"
                  onChangeText={(data) => {
                    handleFormChange(data, "description");
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={inputStyles.label}>
                Sube tu foto preferida de la playa!
              </Text>
              <View>
                <View>
                  <TouchableOpacity onPress={chooseFile} testID="image-picker">
                    <FontAwesomeIcon icon={faCamera} size={40} />
                  </TouchableOpacity>
                </View>
                {imageSelected ? (
                  <Image
                    source={{ uri: imageSelected }}
                    style={createFormStyles.image}
                  />
                ) : (
                  ""
                )}
              </View>
            </View>
            <Text style={inputStyles.label}>
              Indica la ubicaci??n sobre el mapa
            </Text>
            <View style={createFormStyles.mapContainer}>
              <MapView
                testID="map"
                provider={PROVIDER_GOOGLE}
                style={createFormStyles.map}
                pinColor="blue"
                region={{
                  latitude: 41.393019,
                  longitude: 2.205894,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                customMapStyle={mapStyle}
                onPress={(event: MapPressEvent) => {
                  getLocation(event);
                }}
              >
                {marker && (
                  <Marker coordinate={marker} pinColor="blue" testID="marker" />
                )}
              </MapView>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                disabled={buttonDisabled}
                onPress={handleSubmit}
                style={
                  buttonDisabled
                    ? buttonStyles.buttonDisabled
                    : buttonStyles.button
                }
                testID={"submitButton"}
              >
                <Text style={buttonStyles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateForm;
