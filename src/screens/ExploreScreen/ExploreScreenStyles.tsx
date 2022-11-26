import { Dimensions, StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const styles = StyleSheet.create({
  screen: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: colorStyles.white,
  },
});

export default styles;
