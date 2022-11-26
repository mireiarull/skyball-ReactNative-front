import React from "react";
import { Text, View, Image } from "react-native";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import beachImage from "../../../assets/images/barceloneta.jpg";
import gameCardStyles from "./GameCardStyles";

interface GameCardProps {
  game: GameStructure;
}

const GameCard = ({
  game: { date, format, gender, level, players, spots, beachName },
}: GameCardProps) => (
  <View style={gameCardStyles.container}>
    <Image
      source={beachImage}
      style={gameCardStyles.image}
      resizeMode="cover"
    ></Image>
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
);

export default GameCard;
