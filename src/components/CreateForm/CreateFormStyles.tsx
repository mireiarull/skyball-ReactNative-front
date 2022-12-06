import { StyleSheet } from "react-native";

const createFormStyles = StyleSheet.create({
  materialCheckboxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 250,
    alignItems: "center",
    marginTop: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    height: 350,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default createFormStyles;
