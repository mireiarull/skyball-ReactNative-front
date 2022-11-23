/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    borderWidth: 5,
    borderColor: "grey",
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "white",
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
    backgroundColor: "#5265FF",
    padding: 10,
    marginTop: 15,
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
