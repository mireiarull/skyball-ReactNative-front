import { StyleSheet } from "react-native";

const LoadingStyles = StyleSheet.create({
  activityIndicatorWrapper: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff7f",
  },
  gif: {
    height: 150,
    width: 150,
    zIndex: 1110,
  },
  loadingContainer: {
    zIndex: 1100,
  },
});

export default LoadingStyles;
