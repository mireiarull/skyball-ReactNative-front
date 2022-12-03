import React from "react";
import { View, FlatList } from "react-native";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import { useAppSelector } from "../../redux/hooks";
import GameCard from "../GameCard/GameCard";
import LoadMore from "../LoadMore/LoadMore";
import styles from "./GameListStyles";

interface GamesListProps {
  games: GameStructure[];
}

const GameList = ({ games }: GamesListProps) => {
  const { currentPage, totalPages } = useAppSelector(
    (state) => state.ui.pagination
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        ListFooterComponent={
          <View style={styles.footer}>
            <LoadMore pagination={{ currentPage, totalPages }} />
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GameList;
