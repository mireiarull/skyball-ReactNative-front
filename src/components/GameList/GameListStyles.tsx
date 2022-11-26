import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: Dimensions.get("window").height,
    padding: 25,
    justifyContent: "flex-start",
    gap: 20,
  },
  list: {
    display: "flex",
    gap: 20,
  },
});

export default styles;
