/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const checkboxStyles = StyleSheet.create({
  checkbox: {
    width: 15,
    borderWidth: 5,
    borderColor: "grey",
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: colorStyles.white,
    padding: 10,
    marginTop: 15,
  },
  checkboxActive: {
    width: 15,
    borderWidth: 5,
    borderColor: "grey",
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: colorStyles.main,
    padding: 10,
    marginTop: 15,
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 110,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colorStyles.lightGrey,
    padding: 10,
    marginTop: 15,
  },
  buttonActive: {
    width: 110,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colorStyles.main,
    padding: 10,
    marginTop: 15,
  },
  text: {
    color: colorStyles.black,
    fontSize: 17,
    fontWeight: "600",
  },
});

export default checkboxStyles;
