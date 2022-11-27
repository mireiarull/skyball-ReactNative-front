import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: Dimensions.get("window").height,
    justifyContent: "flex-start",
  },
});

export default styles;
