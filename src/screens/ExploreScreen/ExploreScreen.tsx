/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from "react";
import { SafeAreaView, KeyboardAvoidingView, Text, View } from "react-native";
import GameList from "../../components/GameList/GameList";
import Loading from "../../components/Loading/Loading";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
import styles from "./ExploreScreenStyles";

const ExploreScreen = () => {
  const { loadAllGames } = useGames();
  const { isLoading } = useAppSelector((state) => state.ui);

  useEffect(() => {
    loadAllGames();
  }, [loadAllGames]);

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <View style={styles.screen}>
        {isLoading && <Loading />}
        <SafeAreaView>
          <Text>Partidos</Text>
          <GameList />
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ExploreScreen;
