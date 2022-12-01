import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const gameCardStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 200,
    borderRadius: 25,
    backgroundColor: colorStyles.lightGrey,
    marginBottom: 30,
  },
  image: {
    width: "42%",
    height: "100%",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  informationContainer: {
    display: "flex",
    padding: 15,
  },
  informationTitle: {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 10,
  },
  informationFormat: {
    fontSize: 15,
    color: colorStyles.main,
    borderWidth: 2,
    textAlign: "center",
    width: 54,
    borderRadius: 10,
    borderColor: colorStyles.main,
    fontWeight: "600",
    marginBottom: 10,
  },
  informationText: {
    fontSize: 18,
    marginBottom: 10,
  },
  informationSpots: {
    fontSize: 18,
    color: colorStyles.main,
    fontWeight: "600",
    position: "absolute",
    bottom: 12,
    textAlign: "right",
    right: -12,
  },
  dateTimeContainer: {
    backgroundColor: colorStyles.white,
    borderRadius: 10,
    position: "absolute",
    top: 5,
    right: 220,
  },
  dateTime: {
    fontSize: 17,
    padding: 4,
  },
});

export default gameCardStyles;
