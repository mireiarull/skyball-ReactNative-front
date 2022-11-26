import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GameCard from "../GameCard/GameCard";
import styles from "./GameListStyles";
// Import { useAppSelector } from "../../redux/hooks";
import { games } from "./temporaryGameList";

const GameList = () => (
  // Const { games } = useAppSelector((state) => state.games);

  <View style={styles.container}>
    <FlatList
      data={games}
      renderItem={({ item }) => <GameCard game={item}></GameCard>}
    ></FlatList>
  </View>
);
export default GameList;
