/* eslint-disable react-native/no-color-literals */
import { Dimensions, StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  container: {
    display: "flex",
    position: "absolute",
    borderRadius: 20,
    backgroundColor: colorStyles.white,
    width: "80%",
    height: 300,
    padding: 25,
    zIndex: 2,
    top: 200,
  },
  alertSign: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 10,
    top: 10,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: colorStyles.error,
    justifyContent: "center",
  },
  alertSignText: {
    fontSize: 30,
    color: colorStyles.error,
    textAlign: "center",
    fontWeight: "600",
  },
  modalTitle: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  modalText: {
    marginTop: 15,
    fontSize: 16,
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
    backgroundColor: colorStyles.main,
    padding: 10,
    color: colorStyles.white,
    marginTop: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: colorStyles.white,
    fontSize: 20,
    fontWeight: "600",
  },
});

export default styles;
