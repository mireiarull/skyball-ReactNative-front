import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const loadMoreStyles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 90,
    backgroundColor: colorStyles.lightMain,
    padding: 10,
    marginTop: 30,
    zIndex: 100,
  },
  buttonText: {
    color: colorStyles.black,
    fontSize: 20,
    fontWeight: "600",
  },
  buttonDisabled: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 90,
    backgroundColor: colorStyles.lightMain,
    padding: 10,
    marginTop: 30,
  },
});

export default loadMoreStyles;
