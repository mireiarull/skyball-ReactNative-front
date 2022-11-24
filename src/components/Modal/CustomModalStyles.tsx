/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  container: {
    display: "flex",
    position: "absolute",
    borderRadius: 20,
    backgroundColor: "white",
    width: "80%",
    height: 300,
    padding: 25,
    zIndex: 2,
    top: 200,
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
  },
  label: {
    height: 30,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    color: "black",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 90,
    backgroundColor: "#5265FF",
    padding: 10,
    color: "white",
    marginTop: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default styles;
