import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const dateFilterStyles = StyleSheet.create({
  container: {
    marginTop: -30,
    marginBottom: 20,
  },
  dateTimePicker: {
    marginTop: 15,
    width: 150,
    height: 43,
    marginLeft: -30,
  },
  text: {
    color: colorStyles.main,
    fontSize: 18,
    textAlign: "right",
    marginTop: -10,
  },
});

export default dateFilterStyles;
