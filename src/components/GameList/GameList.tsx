import React from "react";
import { View, FlatList } from "react-native";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import GameCard from "../GameCard/GameCard";
import styles from "./GameListStyles";

interface GamesListProps {
  games: GameStructure[];
}

const GameList = ({ games }: GamesListProps) => (
  <View style={styles.container}>
    <FlatList
      data={games}
      renderItem={({ item }) => <GameCard game={item} />}
      ListFooterComponent={<View />}
    />
  </View>
);

export default GameList;
