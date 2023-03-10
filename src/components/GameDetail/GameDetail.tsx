import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { DateTime } from "luxon";
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
import RoutesEnum from "../../navigation/routes";
import Map from "../Map/Map";

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
    players: [
      {
        material: { ball, net, rods },
      },
    ],
    spots,
    owner,
    ownerName,
    location: { coordinates },
  } = useAppSelector(({ games }) => games.currentGame);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  // Const { email } = useAppSelector(({ user }) => user);
  const { id } = useAppSelector(({ user }) => user);

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
            <Text style={GameDetailStyles.informationTitle}>
              {DateTime.fromISO(dateTime).toLocaleString(DateTime.DATE_MED)}
            </Text>
            <Text style={GameDetailStyles.informationText}>
              {DateTime.fromISO(dateTime).toLocaleString(DateTime.TIME_SIMPLE)}
            </Text>
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
          <Text style={GameDetailStyles.informationTitle}>Categor??a:</Text>
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
        {owner === id ? (
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => {
              navigation.navigate(RoutesEnum.update);
            }}
          >
            <Text style={buttonStyles.buttonText}>Editar mi partido</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={buttonStyles.button}>
            <Text style={buttonStyles.buttonText}>Participar!</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={GameDetailStyles.userInformationContainer}>
        <View style={GameDetailStyles.userInformation}>
          <Image
            source={userDefaultImage}
            resizeMode="cover"
            style={GameDetailStyles.userImage}
          ></Image>
          <View>
            <Text style={GameDetailStyles.informationText}>{ownerName}</Text>
            <Text style={GameDetailStyles.informationText}>Organizador/a</Text>
          </View>
        </View>
        <View style={GameDetailStyles.informationDetailsContainer}>
          <Text style={GameDetailStyles.informationTitle}>Descripci??n</Text>
          <Text style={GameDetailStyles.informationText}>{description}</Text>
        </View>
        <View style={GameDetailStyles.informationDetailsContainer}>
          <Text style={GameDetailStyles.informationTitle}>Material</Text>
          <View style={GameDetailStyles.informationMaterialContainer}>
            {net && (
              <View style={GameDetailStyles.materialContainer}>
                <Text style={GameDetailStyles.materialText}>RED</Text>
              </View>
            )}
            {ball && (
              <View style={GameDetailStyles.materialContainer}>
                <Text style={GameDetailStyles.materialText}>PELOTA</Text>
              </View>
            )}
            {rods && (
              <View style={GameDetailStyles.materialContainer}>
                <Text style={GameDetailStyles.materialText}>BARILLAS</Text>
              </View>
            )}
          </View>
        </View>
        <View style={GameDetailStyles.mapContainer}>
          <Text style={GameDetailStyles.informationTitle}>Ubicaci??n</Text>
          {coordinates && (
            <Map latitude={coordinates[1]} longitude={coordinates[0]} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default GameDetail;
