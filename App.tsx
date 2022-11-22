import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import RegisterForm from "./src/components/RegisterForm/RegisterForm";

export default function App() {
  return (
    <View>
      <RegisterForm />
      <StatusBar style="auto" />
    </View>
  );
}

// Const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     backgroundColor: "#fff",
//     flex: 1,
//     justifyContent: "center",
//   },
// });
