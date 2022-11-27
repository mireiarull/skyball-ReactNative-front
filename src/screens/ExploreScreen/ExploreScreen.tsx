import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import GameList from "../../components/GameList/GameList";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
import styles from "./ExploreScreenStyles";

const ExploreScreen = (): JSX.Element => {
  const { loadAllGames } = useGames();

  useEffect(() => {
    loadAllGames();
  }, [loadAllGames]);

  const games = useAppSelector(({ games }) => games.games);

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <Text style={styles.title}>Partidos</Text>
        <GameList games={games} />
      </SafeAreaView>
    </View>
  );
};

export default ExploreScreen;
