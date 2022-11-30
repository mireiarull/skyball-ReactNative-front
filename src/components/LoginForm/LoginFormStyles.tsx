import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";
import inputStyles from "../../styles/inputStyles";

const loginFormStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colorStyles.white,
    fontWeight: "600",
    marginBottom: 5,
  },
  label: {
    ...inputStyles.label,
    color: colorStyles.white,
  },
  input: {
    ...inputStyles.input,
    borderColor: colorStyles.white,
    color: colorStyles.white,
  },
  infoContainer: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
  },
  info: {
    color: colorStyles.white,
    fontSize: 18,
  },
  link: {
    color: colorStyles.main,
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default loginFormStyles;
