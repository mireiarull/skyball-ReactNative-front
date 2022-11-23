import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./CheckboxStyled";

export const Checkbox = (props: {
  selected: boolean;
  onPress: () => void;
  testID: string;
}) => (
  <View style={styles.checkboxContainer}>
    <TouchableOpacity
      accessibilityState={{ selected: props.selected }}
      testID={props.testID}
      style={props.selected ? styles.checkboxActive : styles.checkbox}
      onPress={props.onPress}
    />
  </View>
);
