import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faCalendarMinus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/hooks";
import GameDetailStyles from "./GameDetailStyles";
import { useNavigation } from "@react-navigation/native";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import buttonStyles from "../../styles/buttonStyles";
import userDefaultImage from "../../../assets/images/marta.jpg";

const GameDetail = () => {
  const {
    beachName,
    dateTime,
    description,
    format,
    gender,
    backupImage,
    level,
    players,
    spots,
  } = useAppSelector(({ games }) => games.currentGame);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { email } = useAppSelector(({ user }) => user);

  return (
    <ScrollView style={GameDetailStyles.container} testID="gameCard">
      <View style={GameDetailStyles.imageContainer}>
        <Image
          source={{ uri: backupImage }}
          style={GameDetailStyles.image}
          resizeMode="cover"
        ></Image>
        <TouchableOpacity
          testID="backArrow"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={50}
            style={GameDetailStyles.arrow}
          />
        </TouchableOpacity>
      </View>

      <View style={GameDetailStyles.informationContainer}>
        <View style={GameDetailStyles.informationFormatContainer}>
          <Text style={GameDetailStyles.informationFormat}>
            {format} vs {format}
          </Text>
        </View>
        <View style={GameDetailStyles.timeContainer}>
          <View style={GameDetailStyles.informationIconContainer}>
            <FontAwesomeIcon
              icon={faCalendarMinus}
              size={35}
              style={GameDetailStyles.informationIcon}
            />
          </View>
          <View>
            <Text style={GameDetailStyles.informationTitle}>{dateTime}</Text>
            <Text style={GameDetailStyles.informationText}>{dateTime}</Text>
          </View>
        </View>
        <View style={GameDetailStyles.timeContainer}>
          <View style={GameDetailStyles.informationIconContainer}>
            <FontAwesomeIcon
              icon={faLocationDot}
              size={35}
              style={GameDetailStyles.informationIcon}
            />
          </View>
          <View>
            <Text style={GameDetailStyles.informationTitle}>{beachName}</Text>
            <Text style={GameDetailStyles.informationText}>Barcelona</Text>
          </View>
        </View>
        <View style={GameDetailStyles.informationInputContainer}>
          <Text style={GameDetailStyles.informationTitle}>Categoría:</Text>
          <Text style={GameDetailStyles.informationText}>
            {(gender === "F" && "Femenino") ||
              (gender === "M" && "Masculino") ||
              (gender === "X" && "Mixto")}
          </Text>
        </View>
        <View style={GameDetailStyles.informationInputContainer}>
          <Text style={GameDetailStyles.informationTitle}>Nivel:</Text>
          <Text style={GameDetailStyles.informationText}>
            Nivel{" "}
            {(level === 1 && "principiante") ||
              (level === 2 && "intermedio") ||
              (level === 3 && "intermedio alto") ||
              (level === 4 && "avanzado")}
          </Text>
        </View>

        <Text style={GameDetailStyles.informationSpots}>
          Quedan {spots - players.length} plazas libres de {spots}
        </Text>
        <TouchableOpacity style={buttonStyles.button}>
          <Text style={buttonStyles.buttonText}>Participar!</Text>
        </TouchableOpacity>
      </View>
      <View style={GameDetailStyles.userInformationContainer}>
        <View style={GameDetailStyles.userInformation}>
          <Image
            source={userDefaultImage}
            resizeMode="cover"
            style={GameDetailStyles.userImage}
          ></Image>
          <Text style={GameDetailStyles.informationText}>{email}</Text>
        </View>
        <View style={GameDetailStyles.informationDetailsContainer}>
          <Text style={GameDetailStyles.informationTitle}>Descripción</Text>
          <Text style={GameDetailStyles.informationText}>{description}</Text>
        </View>
        <View style={GameDetailStyles.informationDetailsContainer}>
          <Text style={GameDetailStyles.informationTitle}>Material</Text>
          <Text style={GameDetailStyles.informationText}>{}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default GameDetail;
