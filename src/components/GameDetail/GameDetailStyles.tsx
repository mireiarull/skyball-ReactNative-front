import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const GameDetailStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: colorStyles.white,
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  arrow: {
    position: "absolute",
    zIndex: 5,
    top: -250,
    margin: 20,
    color: colorStyles.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  informationContainer: {
    display: "flex",
    margin: 25,
    borderBottomWidth: 2,
    borderBottomColor: colorStyles.grey,
    paddingBottom: 25,
  },
  informationIcon: {
    color: colorStyles.main,
    height: 10,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  informationIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorStyles.lightMain,
    height: 55,
    width: 55,
    borderRadius: 50,
    marginRight: 20,
  },
  informationTitle: {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 10,
    marginRight: 10,
  },
  informationFormatContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: -10,
    marginBottom: 10,
  },
  informationFormat: {
    fontSize: 18,
    color: colorStyles.main,
    borderWidth: 2,
    textAlign: "center",
    width: 65,
    padding: 4,
    borderRadius: 15,
    borderColor: colorStyles.main,
    fontWeight: "600",
    marginBottom: 10,
  },
  informationInputContainer: {
    marginLeft: 75,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  informationText: {
    fontSize: 16,
    marginBottom: 10,
  },
  informationSpots: {
    fontSize: 16,
    textAlign: "center",
    color: colorStyles.main,
    fontWeight: "600",
    marginBottom: -15,
  },
  userInformationContainer: {
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 100,
  },
  userInformation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  informationDetailsContainer: {
    marginTop: 20,
  },
});

export default GameDetailStyles;
