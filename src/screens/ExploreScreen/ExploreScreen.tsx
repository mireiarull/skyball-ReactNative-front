/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import DateFilter from "../../components/DateFilter/DateFilter";
import GameList from "../../components/GameList/GameList";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
import styles from "./ExploreScreenStyles";

const ExploreScreen = (): JSX.Element => {
  const { loadAllGames } = useGames();
  const { currentPage } = useAppSelector((state) => state.ui.pagination);
  const { filter } = useAppSelector((state) => state.ui);

  useEffect(() => {
    loadAllGames(filter, currentPage);
  }, [loadAllGames, currentPage, filter]);

  const games = useAppSelector(({ games }) => games.games);

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <Text style={styles.title}>Partidos</Text>
        <DateFilter />
        <GameList games={games} />
      </SafeAreaView>
    </View>
  );
};

export default ExploreScreen;
