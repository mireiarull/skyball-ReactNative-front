import { Dimensions, StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: Dimensions.get("window").height,
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  footer: {
    marginTop: -30,
    marginBottom: 325,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  mapContainer: {
    height: 250,
    marginBottom: 20,
  },
  mapLink: {
    fontSize: 20,
    fontWeight: "600",
    color: colorStyles.main,
    marginBottom: 10,
    marginTop: -10,
  },
});

export default styles;
