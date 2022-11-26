import React, { useEffect } from "react";
import { SafeAreaView, KeyboardAvoidingView, ScrollView } from "react-native";
import Loading from "../../components/Loading/Loading";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";

const ExploreScreen = () => {
  const { loadAllGames } = useGames();
  const { isLoading } = useAppSelector((state) => state.ui);

  useEffect(() => {
    loadAllGames();
  }, [loadAllGames]);

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <ScrollView>
        {isLoading && <Loading />}
        <SafeAreaView></SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ExploreScreen;
