/* eslint-disable react-native/no-color-literals */
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default styles;
