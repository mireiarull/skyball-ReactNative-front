import React from "react";
import { View, SafeAreaView, KeyboardAvoidingView, Text } from "react-native";

const CreateScreen = () => (
  <KeyboardAvoidingView behavior="padding" enabled={true}>
    <SafeAreaView>
      <View>
        <Text>Crear nuevo partido</Text>
      </View>
    </SafeAreaView>
  </KeyboardAvoidingView>
);

export default CreateScreen;
