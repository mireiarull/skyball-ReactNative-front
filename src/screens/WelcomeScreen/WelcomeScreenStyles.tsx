import { Dimensions, StyleSheet } from "react-native";
import buttonStyles from "../../styles/buttonStyles";
import colorStyles from "../../styles/colorStyles";

const welcomeScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    height: Dimensions.get("window").height,
    padding: 25,
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  imageContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingBottom: 410,
  },

  button: {
    ...buttonStyles.button,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  link: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    color: colorStyles.white,
  },
});

export default welcomeScreenStyles;
