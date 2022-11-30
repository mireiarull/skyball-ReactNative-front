import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useAppSelector } from "../../redux/hooks";

const DetailScreen = (): JSX.Element => {
  const { currentGame } = useAppSelector((state) => state.games);

  return (
    <View>
      <SafeAreaView>
        <Text>{currentGame.beachName}</Text>
      </SafeAreaView>
    </View>
  );
};

export default DetailScreen;
