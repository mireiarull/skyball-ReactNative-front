import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { type GameStructureWithId } from "../../redux/features/gamesSlice/types";
import beachImage from "../../../assets/images/barceloneta.jpg";
import gameCardStyles from "./GameCardStyles";
import useGames from "../../hooks/useGames/useGames";
import { useNavigation } from "@react-navigation/native";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";

interface GameCardProps {
  game: GameStructureWithId;
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
    owner,
  },
}: GameCardProps) => {
  const { loadOneGame } = useGames();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handlePress = () => {
    loadOneGame(id);
    navigation.navigate(RoutesEnum.gameDetail);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
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
        <View style={gameCardStyles.information}>
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
