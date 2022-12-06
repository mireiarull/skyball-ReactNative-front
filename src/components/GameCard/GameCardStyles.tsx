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
    fontSize: 17,
    padding: 2,
    color: colorStyles.main,
    borderWidth: 2,
    textAlign: "center",
    width: 60,
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
    marginLeft: 50,
    bottom: 12,
    textAlign: "right",
    width: 150,
  },
  dateTimeContainer: {
    backgroundColor: colorStyles.white,
    borderRadius: 10,
    position: "absolute",
    top: 8,
    right: 220,
  },
  dateTime: {
    fontSize: 17,
    padding: 4,
  },
  deleteIconButton: {
    position: "absolute",
    right: 215,
    bottom: 10,
    height: 35,
    width: 35,
    backgroundColor: colorStyles.white,
    borderRadius: 5,
  },
  deleteIcon: {
    color: colorStyles.main,
  },
});

export default gameCardStyles;
