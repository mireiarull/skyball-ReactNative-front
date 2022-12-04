import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const dateFilterStyles = StyleSheet.create({
  container: {
    marginTop: -25,
    marginBottom: 20,
  },
  dateTimePicker: {
    marginTop: 15,
    height: 43,
  },
  text: {
    color: colorStyles.main,
    fontSize: 18,
    textAlign: "right",
  },
});

export default dateFilterStyles;
