import React from "react";
import { View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import CreateForm from "../../components/CreateForm/CreateForm";
import { useAppSelector } from "../../redux/hooks";
import styles from "../CreateScreen/CreateScreenStyles";

const UpdateScreen = () => {
  const game = useAppSelector(({ games }) => games.currentGame);

  return (
    <KeyboardAvoidingView behavior="padding" enabled={false}>
      <SafeAreaView style={styles.container}>
        <View>
          <CreateForm currentGame={game} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default UpdateScreen;
