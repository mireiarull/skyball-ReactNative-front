import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import GameList from "../../components/GameList/GameList";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
import styles from "./ExploreScreenStyles";

const ExploreScreen = (): JSX.Element => {
  const { loadAllGames } = useGames();
  const { currentPage } = useAppSelector((state) => state.ui.pagination);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    loadAllGames(filter, currentPage);
  }, [loadAllGames, currentPage, filter]);

  const games = useAppSelector(({ games }) => games.games);

  const handleFilterClick = () => {
    setFilter("2022-12-20");
  };

  const handleAllClick = () => {
    loadAllGames("", currentPage);
    setFilter("");
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <TouchableOpacity onPress={handleFilterClick}>
          <Text>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAllClick}>
          <Text>LoadAll</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Partidos</Text>
        <GameList games={games} />
      </SafeAreaView>
    </View>
  );
};

export default ExploreScreen;
