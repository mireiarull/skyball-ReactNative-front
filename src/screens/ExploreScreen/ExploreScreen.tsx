import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import GameList from "../../components/GameList/GameList";
import useGames from "../../hooks/useGames/useGames";
import { addFilterActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./ExploreScreenStyles";

const ExploreScreen = (): JSX.Element => {
  const { loadAllGames } = useGames();
  const { currentPage } = useAppSelector((state) => state.ui.pagination);
  const { filter } = useAppSelector((state) => state.ui);

  useEffect(() => {
    loadAllGames(filter, currentPage);
  }, [loadAllGames, currentPage, filter]);
  const dispatch = useAppDispatch();

  const games = useAppSelector(({ games }) => games.games);

  const handleFilterClick = () => {
    dispatch(addFilterActionCreator("2022-12-20"));
  };

  const handleAllClick = () => {
    dispatch(addFilterActionCreator(""));
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
