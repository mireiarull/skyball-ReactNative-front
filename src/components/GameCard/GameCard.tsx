import React from "react";
import { Text, View, Image } from "react-native";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import beachImage from "../../../assets/images/barceloneta.jpg";
import gameCardStyles from "./GameCardStyles";

interface GameCardProps {
  game: GameStructure;
}

const GameCard = ({
  game: {
    date,
    description,
    format,
    gender,
    image,
    level,
    location,
    players,
    spots,
    beachName,
  },
}: GameCardProps) => (
  <View style={gameCardStyles.container}>
    <Image
      source={beachImage}
      style={gameCardStyles.image}
      resizeMode="cover"
    ></Image>
    <View style={gameCardStyles.information}>
      <Text>{beachName}</Text>
      <Text>
        {format} vs {format}
      </Text>
      <Text>
        Nivel{" "}
        {(level === 1 && "principiante") ||
          (level === 2 && "intermedio") ||
          (level === 3 && "intermedio alto") ||
          (level === 4 && "avanzado")}
      </Text>
      <Text>
        {(gender === "F" && "Femenino") ||
          (gender === "M" && "Masculino") ||
          (gender === "X" && "Mixto")}
      </Text>
      <Text>{spots - players.length} plazas libres</Text>
    </View>
  </View>
);

export default GameCard;
