import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GameCard from "../GameCard/GameCard";
import styles from "./GameListStyles";
import { games } from "./temporaryGameList";

const GameList = () => (
  <View style={styles.container}>
    <FlatList
      data={games}
      renderItem={({ item }) => <GameCard game={item}></GameCard>}
    ></FlatList>
  </View>
);
export default GameList;
