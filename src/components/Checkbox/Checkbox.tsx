import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import checkboxStyles from "./CheckboxStyled";

export const Checkbox = (props: {
  selected: boolean;
  onPress: () => void;
  testID: string;
  type: string;
  text?: string;
}) => (
  <View style={checkboxStyles.checkboxContainer}>
    <TouchableOpacity
      accessibilityState={{ selected: props.selected }}
      testID={props.testID}
      style={
        props.type === "radio"
          ? props.selected
            ? checkboxStyles.checkboxActive
            : checkboxStyles.checkbox
          : props.selected
          ? checkboxStyles.buttonActive
          : checkboxStyles.button
      }
      onPress={props.onPress}
    >
      <Text style={checkboxStyles.text}>{props.text}</Text>
    </TouchableOpacity>
  </View>
);
