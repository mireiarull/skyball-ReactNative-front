import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const LoadingStyles = StyleSheet.create({
  activityIndicatorWrapper: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorStyles.white,
    opacity: 0.5,
  },
  gif: {
    height: 150,
    width: 150,
    zIndex: 2,
  },
  loadingContainer: {
    zIndex: 1100,
  },
});

export default LoadingStyles;
