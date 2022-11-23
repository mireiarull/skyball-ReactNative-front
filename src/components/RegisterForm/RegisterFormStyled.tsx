/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 25,
  },
  input: {
    width: "100%",
    height: 40,
    margin: 0,
    borderBottomWidth: 2,
    padding: 10,
    borderColor: "black",
    fontSize: 20,
    paddingHorizontal: 0,
  },
  label: {
    height: 30,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    color: "black",
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 90,
    backgroundColor: "#5265FF",
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
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
