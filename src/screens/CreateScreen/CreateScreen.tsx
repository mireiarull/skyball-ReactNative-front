import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from "react-native";
import CreateForm from "../../components/CreateForm/CreateForm";

const CreateScreen = () => (
  <KeyboardAvoidingView behavior="padding" enabled={true}>
    <SafeAreaView>
      <View>
        <Text>Crear nuevo partido</Text>
        <CreateForm />
      </View>
    </SafeAreaView>
  </KeyboardAvoidingView>
);

export default CreateScreen;
