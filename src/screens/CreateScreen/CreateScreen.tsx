import React from "react";
import { View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import CreateForm from "../../components/CreateForm/CreateForm";
import styles from "./CreateScreenStyles";

const CreateScreen = () => (
  <KeyboardAvoidingView behavior="padding" enabled={false}>
    <SafeAreaView style={styles.container}>
      <View>
        <CreateForm />
      </View>
    </SafeAreaView>
  </KeyboardAvoidingView>
);

export default CreateScreen;
