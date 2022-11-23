/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    position: "absolute",
    borderRadius: 20,
    backgroundColor: "white",
    width: Dimensions.get("window").width / 1.25,
    height: 300,
    padding: 25,
    zIndex: 2,
  },
  label: {
    height: 30,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    color: "black",
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
});

export default styles;
