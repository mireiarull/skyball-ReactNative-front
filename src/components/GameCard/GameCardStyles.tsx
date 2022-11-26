import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const gameCardStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 200,
    borderRadius: 25,
    backgroundColor: colorStyles.lightGrey,
    marginBottom: 30,
  },
  image: {
    width: "42%",
    height: "100%",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  information: {
    display: "flex",
  },
});

export default gameCardStyles;
