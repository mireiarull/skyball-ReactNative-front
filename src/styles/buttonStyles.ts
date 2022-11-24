import { StyleSheet } from "react-native";
import colorStyles from "./colorStyles";

const buttonStyles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 90,
    backgroundColor: colorStyles.main,
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    color: colorStyles.white,
    fontSize: 20,
    fontWeight: "600",
  },
});

export default buttonStyles;
