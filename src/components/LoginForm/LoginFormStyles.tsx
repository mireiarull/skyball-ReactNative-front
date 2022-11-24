/* eslint-disable react-native/no-color-literals */
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
  },
});

export default loginFormStyles;
