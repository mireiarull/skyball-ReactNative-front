import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../redux/hooks";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import styles from "../LoginScreen/LoginScreenStyles";

const DetailScreen = (): JSX.Element => {
  const { currentGame } = useAppSelector((state) => state.games);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity
          testID="backArrow"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={50} style={styles.arrow} />
        </TouchableOpacity>
        <Text>{currentGame.beachName}</Text>
      </SafeAreaView>
    </View>
  );
};

export default DetailScreen;
