import React from "react";
import { View } from "react-native";

import GameDetail from "../../components/GameDetail/GameDetail";

import styles from "./DetailScreenStyles";

const DetailScreen = (): JSX.Element => (
  <View style={styles.container}>
    <GameDetail />
  </View>
);

export default DetailScreen;
