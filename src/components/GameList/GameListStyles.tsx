import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: Dimensions.get("window").height,
    justifyContent: "flex-start",
  },
  footer: {
    marginBottom: 200,
  },
});

export default styles;
