import { Dimensions, StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const styles = StyleSheet.create({
  screen: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: colorStyles.white,
    padding: 25,
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "600",
  },
});

export default styles;
