/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 25,
    height: "100%",
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 20,
    fontSize: 18,
    marginTop: 15,
  },
  checkboxLabelTitle: {
    marginLeft: 20,
    height: 30,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "black",
  },
  checkboxDescription: {
    display: "flex",
    fontSize: 18,
    marginLeft: 50,
  },
});

export default styles;
