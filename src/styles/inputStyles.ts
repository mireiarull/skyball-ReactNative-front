import { StyleSheet } from "react-native";
import colorStyles from "./colorStyles";

const inputStyles = StyleSheet.create({
  input: {
    width: "100%",
    height: 45,
    margin: 0,
    borderBottomWidth: 2,
    padding: 10,
    borderColor: "black",
    fontSize: 20,
    paddingHorizontal: 0,
    backgroundColor: "none",
  },
  label: {
    height: 30,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    color: "black",
  },
  inputTextArea: {
    width: "100%",
    height: 130,
    margin: 0,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colorStyles.lightGrey,
    fontSize: 20,
    padding: 10,
  },
});

export default inputStyles;
