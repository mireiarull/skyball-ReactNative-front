import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { DateTime } from "luxon";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import beachImage from "../../../assets/images/barceloneta.jpg";
import gameCardStyles from "./GameCardStyles";
import useGames from "../../hooks/useGames/useGames";

interface GameCardProps {
  game: GameStructure;
}

const GameCard = ({
  game: {
    dateTime,
    format,
    gender,
    level,
    players,
    spots,
    beachName,
    backupImage,
    id,
  },
}: GameCardProps) => {
  const { loadOneGame } = useGames();

  return (
    <TouchableOpacity
      onPress={async () => loadOneGame(id!)}
      testID="linkToDetail"
      activeOpacity={1}
    >
      <View style={gameCardStyles.container} testID="gameCard">
        {backupImage ? (
          <Image
            source={{ uri: backupImage }}
            style={gameCardStyles.image}
            resizeMode="cover"
          ></Image>
        ) : (
          <Image
            testID="defaultImage"
            source={beachImage}
            style={gameCardStyles.image}
            resizeMode="cover"
          ></Image>
        )}
        <View style={gameCardStyles.dateTimeContainer}>
          <Text style={gameCardStyles.dateTime}>
            {DateTime.fromISO(dateTime).toFormat("dd/MM h:mm")}
          </Text>
        </View>
        <View style={gameCardStyles.informationContainer}>
          <Text style={gameCardStyles.informationTitle}>{beachName}</Text>

          <Text style={gameCardStyles.informationFormat}>
            {format} vs {format}
          </Text>
          <Text style={gameCardStyles.informationText}>
            Nivel{" "}
            {(level === 1 && "principiante") ||
              (level === 2 && "intermedio") ||
              (level === 3 && "intermedio alto") ||
              (level === 4 && "avanzado")}
          </Text>
          <Text style={gameCardStyles.informationText}>
            {(gender === "F" && "Femenino") ||
              (gender === "M" && "Masculino") ||
              (gender === "X" && "Mixto")}
          </Text>
          <Text style={gameCardStyles.informationSpots}>
            {spots - players.length} plazas libres
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
